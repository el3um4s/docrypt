<script lang="ts">
  import textToConverter from "../../Stores/TextToConverter";
  import createBlobFromText from "../../Functions/CreateBlobFromText";

  const shareFile = () => {
    const blob = createBlobFromText($textToConverter);
    const file = new File([blob], "doCrypt.txt", { type: "text/plain" });
    navigator.share({ text: "", files: [file] } as ShareData);
  };

  $: base64 = JSON.parse($textToConverter).base64;
  const shareText = () => {
    navigator.share({ text: base64 } as ShareData);
  };
</script>

<div>
  {base64}
</div>

<button on:click={shareFile}>Share Crypted Text</button>
