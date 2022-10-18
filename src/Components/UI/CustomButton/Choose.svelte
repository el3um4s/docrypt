<script lang="ts">
  import LogoGeneric from "../SVG/LOGO/LogoGeneric.svelte";

  import Lang from "../../Lang.svelte";

  export let logo = LogoGeneric;
  export let title = "title";
  export let subtitle = "subtitle";

  export let pageLang = "Home";

  $: c = pageLang;
</script>

<button on:click>
  <svelte:component this={logo} height="64px" />
  <h1>
    <Lang {c} v={title} />
  </h1>
  <h3>
    <Lang {c} v={subtitle} />
  </h3>
</button>

<style lang="postcss">
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 8px;
    row-gap: 8px;
    user-select: none;
    border: 1px solid transparent;
  }

  button:focus {
    outline: 2px solid var(--color);
    border-radius: 4px;
  }
  h1 {
    text-transform: uppercase;
    letter-spacing: 10px;
    color: var(--color-menu);
    font-size: 23px;
    line-height: 25px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  h3 {
    letter-spacing: 3px;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 20px;
    color: var(--color);
  }
</style>
