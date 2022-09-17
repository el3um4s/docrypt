<script lang="ts">
  import Lang from "../Default/Lang.svelte";
  import lang from "../../Stores/Lang";
  import { translation } from "../../Languages/Languages";

  let selected = "en";
</script>

<div>
  <label for="changeLanguage"><Lang c="menu" v="changeLanguage" />:</label>
  <select
    bind:value={selected}
    on:change={() => lang.set(selected)}
    id="changeLanguage"
  >
    {#each translation as l}
      <option value={l.id}>
        {l.name}
      </option>
    {/each}
  </select>
</div>
