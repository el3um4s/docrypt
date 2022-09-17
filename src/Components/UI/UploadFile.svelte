<script>
  import Lang from "../Default/Lang.svelte";
  import textToConverter from "../../Stores/TextToConverter";

  let files;

  $: if (files) {
    // Note that `files` is of type `FileList`, not an Array:
    // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    console.log(files);

    for (const file of files) {
      console.log(`${file.name}: ${file.size} bytes`);
    }
  }
</script>

<div>
  <label for="many"><Lang c="menu" v="chooseFiles" />:</label>
  <input bind:files id="many" multiple type="file" />

  {#if files}
    <h2><Lang c="menu" v="selectedFiles" />:</h2>
    {#each Array.from(files) as file}
      <p>{file.name} ({file.size} bytes)</p>
    {/each}

    <button
      on:click={() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          // Use a regex to remove data url part
          const base64 = reader.result
            // @ts-ignore
            .replace("data:", "")
            .replace(/^.+,/, "");

          console.log(base64);
          // Logs wL2dvYWwgbW9yZ...
          textToConverter.set(base64);
        };
        reader.readAsDataURL(files[0]);
      }}>Convert to base64</button
    >
  {/if}
</div>
