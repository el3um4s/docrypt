<script>
  import Lang from "./Languages/Lang.svelte";
  import textToConverter from "../../Stores/TextToConverter";

  let files;

  $: if (files) {
    // Note that `files` is of type `FileList`, not an Array:
    // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    // console.log(files);
    const file = files[0];
    const name = file.name;
    const type = file.type;
    const size = file.size;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = () => {
      // Use a regex to remove data url part
      const base64 = reader.result
        // @ts-ignore
        .replace("data:", "")
        .replace(/^.+,/, "");

      const obj = { name, type, size, base64 };

      textToConverter.set(JSON.stringify(obj));
    };
  }
</script>

<div>
  <label for="many"><Lang p="menu" w="chooseFiles" />:</label>
  <input bind:files id="many" type="file" />

  {#if files}
    <h2><Lang p="menu" w="selectedFile" />:</h2>
    {#each Array.from(files) as file}
      <p>{file.name} ({file.size} bytes)</p>
    {/each}
  {/if}
</div>
