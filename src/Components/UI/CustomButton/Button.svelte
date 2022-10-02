<script lang="ts">
  import Lang from "../../Lang.svelte";

  export let label: string = "";
  export let subtitle: string = "";
  export let LeftIcon = null;
  export let RightIcon = null;

  export let pageLang = "Home";

  $: c = pageLang;
</script>

<section on:click class="custom-button">
  {#if LeftIcon}
    <div class="button-icon">
      <svelte:component this={LeftIcon} height="32px" />
    </div>
  {/if}
  {#if label !== ""}
    <div class="label">
      <div>
        <Lang {c} v={label} />
      </div>
      {#if subtitle !== ""}
        <div class="subtitle">
          <Lang {c} v={subtitle} />
        </div>
      {/if}
    </div>
  {/if}
  {#if RightIcon}
    <div class="button-icon">
      <svelte:component this={RightIcon} height="32px" />
    </div>
  {/if}
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--color-background);
    border: 1px solid var(--color);
    border-radius: 1px;
    color: var(--color);
    padding: 0.25em;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    height: 64px;
    gap: 0.5em;
    user-select: none;
  }

  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.5em;
    font-size: 1.1em;
    font-weight: bold;
  }

  .subtitle {
    font-weight: lighter;
    font-size: 0.8em;
  }
</style>
