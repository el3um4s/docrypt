<script lang="ts">
  import "./css/tailwind.pcss";
  import Lang from "./Components/Default/Lang.svelte";
  import ChooseLanguage from "./Components/UI/ChooseLanguage.svelte";
  import File from "./Components/UI/File.svelte";
  import MarkedText from "./Components/UI/MarkedText.svelte";
  import CameraInput from "./Components/UI/CameraInput.svelte";
  import CameraMedia from "./Components/UI/CameraMedia.svelte";
  import SaveBase64File from "./Components/UI/SaveBase64File.svelte";
  import ShareBase64File from "./Components/UI/ShareBase64File.svelte";
  import VersionNumber from "./Components/UI/VersionNumber.svelte";

  import textToConverter from "./Stores/TextToConverter";

  let component = File;

  let password = "";
</script>

<svelte:head>
  <title>DoCrypt</title>
</svelte:head>

<main>
  <h1>DoCrypt</h1>

  <div>
    <button><Lang c="menu" v="encrypt" /></button>
    <button><Lang c="menu" v="decrypt" /></button>

    <input bind:value={password} placeholder="password" />
  </div>

  <ChooseLanguage />

  <div>
    <button>Original</button>
    <button>Transformed</button>
  </div>

  <div>
    <button on:click={() => (component = File)}
      ><Lang c="menu" v="files" /></button
    >
    <!-- <button on:click={() => (component = MarkedText)}
      ><Lang c="menu" v="message" /></button
    >
    <button on:click={() => (component = CameraInput)}
      ><Lang c="menu" v="photoNative" /></button
    >
    <button on:click={() => (component = CameraMedia)}
      ><Lang c="menu" v="photoWebCam" /></button
    > -->
  </div>

  <svelte:component this={component} />

  {#if $textToConverter != ""}
    <SaveBase64File /><ShareBase64File />
  {/if}
  <VersionNumber />
</main>

<style lang="postcss">
  main {
    @apply w-full max-w-4xl mx-auto p-4;
  }
</style>
