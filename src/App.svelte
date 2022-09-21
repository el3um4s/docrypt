<script lang="ts">
  import "./css/tailwind.pcss";
  import Lang from "./Components/Default/Lang.svelte";
  import ChooseLanguage from "./Components/UI/ChooseLanguage.svelte";
  import UploadFile from "./Components/UI/UploadFile.svelte";
  import MarkedText from "./Components/UI/MarkedText.svelte";
  import CameraInput from "./Components/UI/CameraInput.svelte";
  import CameraMedia from "./Components/UI/CameraMedia.svelte";
  import SaveBase64File from "./Components/UI/SaveBase64File.svelte";
  import ShareBase64File from "./Components/UI/ShareBase64File.svelte";
  import VersionNumber from "./Components/UI/VersionNumber.svelte";

  const VERSION = "[VI]Version: {version} - built on {date}[/VI]";

  let component = MarkedText;
</script>

<svelte:head>
  <title>DoCrypt</title>
</svelte:head>

<main>
  <h1>DoCrypt</h1>

  <ChooseLanguage />
  <svelte:component this={component} />

  <h3><Lang c="menu" v="encrypt" /></h3>
  <SaveBase64File /><ShareBase64File />
  <button><Lang c="menu" v="documents" /></button>
  <UploadFile />
  <button><Lang c="menu" v="message" /></button>
  <MarkedText />
  <button><Lang c="menu" v="shootPhoto" /></button>
  <CameraInput />
  <CameraMedia />
  <h3><Lang c="menu" v="decrypt" /></h3>
  <button><Lang c="menu" v="documents" /></button>
  <button><Lang c="menu" v="message" /></button>
  <VersionNumber />
</main>

<style lang="postcss">
  main {
    @apply w-full max-w-4xl mx-auto p-4;
  }
</style>
