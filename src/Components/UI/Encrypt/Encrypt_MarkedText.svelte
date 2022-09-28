<script lang="ts">
  import { marked } from "marked";
  import Lang from "../../Default/Lang.svelte";

  import textToConverter from "../../../Stores/TextToConverter";
  import { Base64 } from "js-base64";

  let text = ``;
  let textArea: HTMLTextAreaElement;

  let showPlain = true;

  $: {
    const name = "message.txt";
    const type = "text/plain";
    const size = text.length;
    const base64 = Base64.encode(text, true);

    const obj = { name, type, size, base64 };
    textToConverter.set(JSON.stringify(obj));
  }
</script>

<section>
  <button on:click={() => (showPlain = !showPlain)}>
    {#if showPlain}
      <Lang c="menu" v="showRenderedText" />
    {:else}
      <Lang c="menu" v="showPlainText" />
    {/if}
  </button>

  {#if showPlain}
    <textarea
      bind:this={textArea}
      bind:value={text}
      on:keydown={(e) => {
        if (e.key == "Tab") {
          e.preventDefault();
          const start = textArea.selectionStart;
          const end = textArea.selectionEnd;
          textArea.value =
            textArea.value.substring(0, start) +
            "\t" +
            textArea.value.substring(end);
          textArea.selectionStart = textArea.selectionEnd = start + 1;
        }
      }}
    />
  {:else}
    {@html marked(text)}
  {/if}
</section>

<style>
  textarea {
    width: 100%;
    height: 200px;
    padding: 0.25em;
  }
</style>
