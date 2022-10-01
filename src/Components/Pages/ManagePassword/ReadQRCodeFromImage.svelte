<script lang="ts">
  import { slide } from "svelte/transition";

  import QrScanner from "qr-scanner";
  import password from "../../../Stores/Password";

  import Button from "../../UI/CustomButton/Button.svelte";

  export let showInputPassword: boolean = true;

  password.set("");
  let p = "";
  $: password.set(p);

  let input;
  let image;
  let showImage = false;
  let qrNotFound = false;

  function onChange() {
    p = "";
    qrNotFound = false;
    const file = input.files[0];

    if (file) {
      showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);

      return;
    }
    showImage = false;
  }
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
        }}
        label="Scan again"
      />
    </div>
  {/if}
  {#if qrNotFound}
    <div transition:slide class="title-section errorMessage">
      <h3>QR Code not found</h3>

      <Button
        on:click={() => {
          p = "";
          qrNotFound = false;
        }}
        label="Scan again"
      />
    </div>
  {/if}
  {#if p == "" && !qrNotFound}
    <div class="select-image" transition:slide>
      <label for="qr">Upload a picture:</label>
      <input
        on:change={onChange}
        accept="image/png, image/jpeg"
        bind:this={input}
        id="qr"
        name="qr"
        type="file"
      />
    </div>
  {/if}
  {#if showImage}
    <img
      bind:this={image}
      src=""
      alt="Preview"
      on:load={() => {
        QrScanner.scanImage(image, { returnDetailedScanResult: true })
          .then((result) => {
            p = result.data;
            showImage = false;
          })
          .catch((error) => {
            qrNotFound = true;
            showImage = false;
          });
      }}
    />
  {/if}
</section>

<style>
  img {
    display: block;
    position: absolute;
    z-index: -100;
    top: -99999;
    left: -99999;
    width: 100%;
    height: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    transition: all 0.5s ease-in-out;
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

  .errorMessage {
    padding: 10px;
    color: var(--color-red);
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }

  .successMessage h3 {
    color: var(--color-green);
  }

  .select-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 0.5s ease-in-out;
  }
</style>
