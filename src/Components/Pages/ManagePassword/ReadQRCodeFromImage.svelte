<script lang="ts">
  import QrScanner from "qr-scanner";
  import password from "../../../Stores/Password";

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

<div>
  <label for="qr">Upload a picture:</label>
  <input
    on:change={onChange}
    accept="image/png, image/jpeg"
    bind:this={input}
    id="qr"
    name="qr"
    type="file"
  />

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

  {#if p != ""}
    <div>Password</div>
    <div>{p}</div>
  {/if}
  {#if qrNotFound}
    <div>No QR code found</div>
  {/if}
</div>

<style>
  img {
    display: block;
    position: absolute;
    z-index: -100;
    top: -99999;
    left: -99999;
  }
</style>
