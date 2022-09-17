<script lang="ts">
  import "./css/tailwind.pcss";
  import Lang from "./Components/Default/Lang.svelte";
  import ChooseLanguage from "./Components/UI/ChooseLanguage.svelte";
  import UploadFile from "./Components/UI/UploadFile.svelte";
  import MarkedText from "./Components/UI/MarkedText.svelte";

  const VERSION = "[VI]Version: {version} - built on {date}[/VI]";
</script>

<main>
  <h1>DoCrypt</h1>

  <ChooseLanguage />

  <h3><Lang c="menu" v="encrypt" /></h3>
  <button><Lang c="menu" v="documents" /></button>
  <UploadFile />
  <button><Lang c="menu" v="message" /></button>
  <MarkedText />
  <button><Lang c="menu" v="shootPhoto" /></button>
  <h3><Lang c="menu" v="decrypt" /></h3>
  <button><Lang c="menu" v="documents" /></button>
  <button><Lang c="menu" v="message" /></button>
  <p>{VERSION}</p>
</main>

<style lang="postcss">
</style>
