<script lang="ts">
  export let cipherText = "";
  import Button from "../../UI/CustomButton/Button.svelte";

  import saveBase64FileAsText from "../../../Functions/SaveBase64FileAsText";
  import createBlobFromText from "../../../Functions/CreateBlobFromText";

  import IconDownload from "../../UI/SVG/ICO/IconDownload.svelte";
  import IconSend from "../../UI/SVG/ICO/IconSend.svelte";
  import IconSendDocument from "../../UI/SVG/ICO/IconSendDocument.svelte";
  import IconLink from "../../UI/SVG/ICO/IconLink.svelte";

  const pageLang = "EncryptedText";

  const shareText = () => {
    navigator.share({ text: cipherText } as ShareData);
  };

  const shareLink = () => {
    navigator.share({
      text: "",
      url: `https://docrypt.org?message=${cipherText}`,
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

  <div class="button-bar">
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Share Encrypted Text"
        LeftIcon={IconSend}
        on:click={shareText}
      />
    </div>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Share Encrypted Link"
        LeftIcon={IconLink}
        on:click={shareLink}
      />
    </div>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Share Encrypted File"
        LeftIcon={IconSendDocument}
        on:click={shareFile}
      />
    </div>
    <div class="item button-icon-yellow">
      <Button
        {pageLang}
        label="Save Encrypted File"
        LeftIcon={IconDownload}
        on:click={saveFile}
      />
    </div>
  </div>
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }
  .ciphertext {
    background-color: #ccc;
    color: var(--color-menu);
    border: 2px solid var(--color);
    border-radius: 2px;
    padding: 0.25em;
    margin: 0.5em;
    transition: all 0.5s ease-in-out;
    overflow-wrap: break-word;
  }

  .button-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* border: 4px solid var(--color-menu); */
  }

  .button-bar .item {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    text-align: center;
    border: 4px solid transparent;
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
</style>
