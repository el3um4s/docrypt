<script lang="ts">
  import Lang from "./Languages/Lang.svelte";
  import textToConverter from "../../Stores/TextToConverter";

  let files;
  let image;

  const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace("data:", "").replace(/^.+,/, "");
</script>

<div>
  <label for="cameraFileInput">
    <span class="button-action"><Lang p="menu" w="useNativeCamera" /></span>

    <!-- The hidden file `input` for opening the native camera -->
    <input
      bind:files
      id="cameraFileInput"
      type="file"
      accept="image/*"
      capture="environment"
    />
  </label>

  {#if files}
    <img
      bind:this={image}
      class="pictureFromCamera"
      src={globalThis.URL.createObjectURL(files[0])}
      alt="camera"
    />
    <button
      on:click={() => {
        fetch(image.src)
          .then((res) => res.blob())
          .then((blob) => {
            // Read the Blob as DataURL using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
              console.log(reader.result);
              // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

              // Convert to Base64 string
              const base64 = getBase64StringFromDataURL(reader.result);
              console.log(base64);
              // Logs wL2dvYWwgbW9yZ...

              textToConverter.set(base64);
            };
            reader.readAsDataURL(blob);
          });
      }}>Convert to base64</button
    >
  {/if}
</div>

<style>
  #cameraFileInput {
    display: none;
  }

  .pictureFromCamera {
    width: 100%;
    height: auto;
    margin-top: 16px;
  }
</style>
