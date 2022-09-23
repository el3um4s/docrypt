<script lang="ts">
  import textToConverter from "../../Stores/TextToConverter";
  import createBlobFromText from "../../Functions/CreateBlobFromText";

  $: base64 = JSON.parse($textToConverter).base64;
  const shareText = () => {
    navigator.share({ text: base64 } as ShareData);
  };
</script>

<div>
  {base64}
</div>

<button on:click={shareText}>Share Crypted Text</button>
