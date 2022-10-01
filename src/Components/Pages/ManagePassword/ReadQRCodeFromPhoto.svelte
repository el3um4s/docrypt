<script lang="ts">
  import { slide } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";

  import QrScanner from "qr-scanner";
  import password from "../../../Stores/Password";

  import Button from "../../UI/CustomButton/Button.svelte";

  export let showInputPassword: boolean = true;

  let videoElem: HTMLVideoElement;
  let hasCamera: boolean = false;
  let listCameras: QrScanner.Camera[] = [];
  let cameraSelected: string;

  let cameraScanner: QrScanner;
  password.set("");
  let p = "";
  $: password.set(p);

  onMount(async () => {
    hasCamera = await QrScanner.hasCamera();
    if (hasCamera) {
      cameraScanner = new QrScanner(
        videoElem,
        (result) => {
          p = result.data;
          cameraScanner.stop();
        },
        {
          returnDetailedScanResult: true,
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      listCameras = await QrScanner.listCameras(true);
      cameraSelected = listCameras[0].id;
      cameraScanner.start();
    }
  });

  onDestroy(() => {
    if (cameraScanner) {
      cameraScanner.stop();
      cameraScanner.destroy();
      cameraScanner = null;
    }
  });
</script>

<section transition:slide>
  {#if p != ""}
    <div transition:slide class="title-section successMessage">
      <h3>QR Code found</h3>

      {#if showInputPassword}
        <div class="showPassword">
          {p}
        </div>
      {/if}

      <Button
        on:click={() => {
          p = "";
          cameraScanner.start();
        }}
        label="Scan again"
      />
    </div>
  {/if}
  {#if hasCamera && p == ""}
    <div class="select-value" transition:slide>
      <label for="changeCamera">Select Camera</label>
      <select
        id="changeCamera"
        bind:value={cameraSelected}
        on:change={() => {
          cameraScanner.setCamera(cameraSelected);
        }}
      >
        {#each listCameras as camera}
          <option value={camera.id}>
            {camera.label}
          </option>
        {/each}
      </select>
    </div>
  {/if}
  {#if p == ""}
    <div class="camera">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video
        class="video-qr-scanner"
        transition:slide
        bind:this={videoElem}
        style:display={hasCamera ? "inline" : "none"}
      />
    </div>
  {/if}
  {#if !hasCamera}
    <div transition:slide class="errorCamera">
      <p>Camera not found</p>
    </div>
  {/if}
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    transition: all 0.5s ease-in-out;
  }

  .camera {
    width: 100%;
    height: auto;
    border: 4px solid var(--color-menu);
    color: var(--color);
    padding: 10px;
    border-radius: 2px;
    margin: 0px;
  }
  video {
    width: 100%;
    height: auto;
    border: 4px solid var(--color-red);
  }

  select:focus {
    border-color: var(--color-red);
  }

  .errorCamera {
    width: 100%;
    height: auto;
    border: 4px solid var(--color-menu);
    color: var(--color);
    padding: 10px;
    border-radius: 2px;
    margin: 0px;
    color: var(--color-red);
  }

  .title-section {
    border: 4px solid var(--color-menu);
    color: var(--color);
    padding: 10px;
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: bold;
  }
  .title-section h3 {
    padding: 10px;
    color: var(--color-red);
    font-size: 1.2em;
    font-weight: bold;
  }

  .successMessage h3 {
    color: var(--color-green);
  }
  .showPassword {
    border: 4px solid var(--color-green);
    color: var(--color-green);
    background-color: #e9e9e9;
    font-weight: bold;
    padding: 10px;
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
    overflow-wrap: break-word;
    user-select: all;
  }
</style>
