<script>
  import { marked } from "marked";
  import Lang from "../Default/Lang.svelte";

  import textToConverter from "../../Stores/TextToConverter";

  let text = ``;

  let showPlain = true;

  $: if (text != "") {
    const name = "message.txt";
    const type = "text/plain";
    const size = text.length;
    const base64 = window.btoa(text);

    const obj = { name, type, size, base64 };
    textToConverter.set(JSON.stringify(obj));
  }
</script>

<button on:click={() => (showPlain = !showPlain)}>
  {#if showPlain}
    <Lang c="menu" v="showRenderedText" />
  {:else}
    <Lang c="menu" v="showPlainText" />
  {/if}
</button>

{#if showPlain}
  <textarea bind:value={text} />
{:else}
  {@html marked(text)}
{/if}

<style>
  textarea {
    width: 100%;
    height: 200px;
  }
</style>
