<script lang="ts">
  import { slide } from "svelte/transition";

  import { marked } from "marked";

  import IconEdit from "../SVG/ICO/IconEdit.svelte";
  import IconRenderHTML from "../SVG/ICO/IconRenderHTML.svelte";

  export let text = ``;
  let textArea: HTMLTextAreaElement;

  let showPlainText = true;
  let showHTML = false;
</script>

<section>
  <div class="button-bar">
    <button
      class:showPlainText
      on:click={() => (showPlainText = !showPlainText)}
    >
      <IconEdit
        --color-default={showPlainText
          ? "var(--color-menu-hover)"
          : "var(--color)"}
        --color-hover="var(--color)"
      />
    </button>
    <button class:showHTML on:click={() => (showHTML = !showHTML)}>
      <IconRenderHTML
        --color-default={showHTML ? "var(--color-menu-hover)" : "var(--color)"}
        --color-hover="var(--color)"
      />
    </button>
  </div>

  <div class="input-text">
    {#if showPlainText}
      <div class="item textarea" transition:slide>
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
      </div>
    {/if}
    {#if showHTML}
      <div class="item" transition:slide>
        <div class="rendered">
          {@html marked(text)}
        </div>
      </div>
    {/if}
  </div>
</section>

<style lang="postcss">
  section {
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .input-text {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }

  .rendered {
    width: 100%;
    min-height: 360px;
    height: 100%;
    background-color: #ccc;
    color: var(--color-menu);
    padding: 0.25em;
    cursor: default;
    border-radius: 2px;
  }

  textarea {
    width: 100%;
    min-height: 360px;
    padding: 0.25em;
  }

  .button-bar {
    display: flex;
    background-color: var(--color-menu);
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    gap: 0.25em;
  }

  button {
    background-color: var(--color-background);
    border: 1px solid var(--color);
    border-radius: 1px;
    color: var(--color);
    padding: 0.25em;
    transition: all 0.5s ease-in-out;
  }

  button:hover {
    background-color: var(--color-menu-hover);
    color: var(--color-menu);
    border-color: var(--color-menu);
    border-radius: 4px;
  }
</style>
