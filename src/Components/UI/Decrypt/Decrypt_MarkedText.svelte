<script lang="ts">
  import sjcl from "sjcl";

  import { marked } from "marked";

  import { Base64 } from "js-base64";

  import Lang from "../../Default/Lang.svelte";

  import password from "../../../Stores/Password";

  import Password from "../Password/Password.svelte";

  let textEncoded = "";
  let textDecoded = ``;

  let showPlain = true;

  const decodeText = (text: string): string => {
    const decoded = window.atob(text);
    try {
      const decrypted = sjcl.decrypt($password, decoded);
      const result = Base64.decode(decrypted);
      return result;
    } catch (error) {
      return "Error";
    }
  };
</script>

<section>
  <textarea bind:value={textEncoded} />

  <div>
    <Password />

    <button
      on:click={() => {
        textDecoded = decodeText(textEncoded);
      }}>Decrypt</button
    >
  </div>

  <button on:click={() => (showPlain = !showPlain)}>
    {#if showPlain}
      <Lang c="menu" v="showRenderedText" />
    {:else}
      <Lang c="menu" v="showPlainText" />
    {/if}
  </button>

  {#if showPlain}
    <textarea bind:value={textDecoded} />
  {:else}
    {@html marked(textDecoded)}
  {/if}
</section>

<style>
  textarea {
    width: 100%;
    height: 200px;
    padding: 0.25em;
  }
</style>
