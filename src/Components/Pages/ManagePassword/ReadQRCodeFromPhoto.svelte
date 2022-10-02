<script lang="ts">
  import { slide } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";

  import QrScanner from "qr-scanner";
  import password from "../../../Stores/Password";

  import Button from "../../UI/CustomButton/Button.svelte";

  import IconStopScanner from "../../UI/SVG/ICO/IconStopScanner.svelte";

  import Lang from "../../Lang.svelte";
  const pageLang = "ReadQRCodeFromPhoto";

  export let showInputPassword: boolean = true;

  let videoElem: HTMLVideoElement;
  let hasCamera: boolean = false;
  let listCameras: QrScanner.Camera[] = [];
  let cameraSelected: string;

  let cameraScanner: QrScanner;
  let scannerStopped: boolean = false;
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
      <h3>
        <Lang c={pageLang} v="QR Code found" />
      </h3>

      {#if showInputPassword}
        <div class="showPassword">
          {p}
        </div>
      {/if}

      <div class="button-icon-red">
        <Button
          on:click={() => {
            cameraScanner.start();
            p = "";
            scannerStopped = false;
          }}
          {pageLang}
          label="Scan again"
        />
      </div>
    </div>
  {/if}

  {#if scannerStopped}
    <div transition:slide class="title-section errorMessage">
      <h3><Lang c={pageLang} v="QR Code not found" /></h3>

      <div class="button-icon-red">
        <Button
          on:click={() => {
            cameraScanner.start();
            p = "";
            scannerStopped = false;
          }}
          {pageLang}
          label="Scan again"
        />
      </div>
    </div>
  {/if}
  <div
    class="camera"
    style:display={p == "" && !scannerStopped ? "flex" : "none"}
  >
    {#if hasCamera && p == "" && !scannerStopped}
      <div class="select-value" transition:slide>
        <!-- <label for="changeCamera">Select Camera</label> -->
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
    <!-- svelte-ignore a11y-media-has-caption -->
    <video
      class="video-qr-scanner"
      transition:slide
      bind:this={videoElem}
      style:display={hasCamera && p == "" && !scannerStopped
        ? "inline"
        : "none"}
    />
    {#if hasCamera && p == "" && !scannerStopped}
      <div class="stop-scanner button-icon-red">
        <Button
          {pageLang}
          LeftIcon={IconStopScanner}
          label="Stop Scanner"
          on:click={() => {
            cameraScanner.stop();
            scannerStopped = true;
          }}
        />
      </div>
    {/if}
  </div>

  {#if !hasCamera}
    <div transition:slide class="errorCamera">
      <p><Lang c={pageLang} v="Camera not found" /></p>
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

  .errorMessage h3 {
    color: var(--color-red);
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

  .camera {
    z-index: 100;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: var(--color-background);
    border: 4px solid var(--color-red);
    box-sizing: border-box;
    color: var(--color);
    margin: 0px;

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  video {
    width: 100%;
    height: 100%;
    z-index: 150;
    position: absolute;
  }

  .select-value {
    border-color: transparent;
  }
  .select-value,
  .stop-scanner {
    z-index: 200;
  }

  .stop-scanner {
    width: 240px;
    margin-bottom: 8px;
  }
</style>
