<script lang="ts">
  export let cipherText = "";

  import saveBase64FileAsText from "../../../Functions/SaveBase64FileAsText";
  import createBlobFromText from "../../../Functions/CreateBlobFromText";

  const shareText = () => {
    navigator.share({ text: cipherText } as ShareData);
  };

  const shareLink = () => {
    navigator.share({
      text: "",
      url: `https://docrypt.org/message?${cipherText}`,
    } as ShareData);
  };

  const saveFile = () => {
    // for the future
    // const showSaveFilePickerSupported = !!globalThis.showSaveFilePicker;
    saveBase64FileAsText({
      text: cipherText,
      fileName: "message.txt",
      showSaveFilePickerSupported: false,
    });
  };

  const shareFile = () => {
    const blob = createBlobFromText(cipherText);
    const file = new File([blob], "message.txt", { type: "text/plain" });
    navigator.share({ text: "", files: [file] } as ShareData);
  };
</script>

<section>
  <div class="ciphertext">
    {cipherText}
  </div>

  <button on:click={shareText}>Share Crypted Text</button>
  <!-- <button on:click={shareLink}>Share Crypted Link</button> -->
  <button on:click={saveFile}>Save Base64 File</button>
  <button on:click={shareFile}>Share Base64 File</button>
</section>

<style lang="postcss">
  .ciphertext {
    overflow-wrap: break-word;
  }
</style>
