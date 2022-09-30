<script lang="ts">
  export let label: string = "";
  export let subtitle: string = "";
  export let Icon = null;
</script>

<section on:click>
  {#if Icon}
    <div class="button-icon">
      <!-- svelte-ignore reactive-component -->
      <Icon height="32px" />
    </div>
  {/if}
  {#if label !== ""}
    <div class="label">
      <div>{label}</div>
      {#if subtitle !== ""}
        <div class="subtitle">{subtitle}</div>
      {/if}
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
  }

  section:hover {
    background-color: var(--color-menu-hover);
    color: var(--color-menu);
    border-color: var(--color-menu);
    border-radius: 4px;
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
