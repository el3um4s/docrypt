<script lang="ts">
  import textToConverter from "../../Stores/TextToConverter";
  import createBlobFromText from "../../Functions/CreateBlobFromText";

  const shareFile = () => {
    const blob = createBlobFromText($textToConverter);
    const file = new File([blob], "doCrypt.txt", { type: "text/plain" });
    navigator.share({ text: "", files: [file] } as ShareData);
  };
</script>

<button on:click={shareFile}>Share Base64 File</button>
