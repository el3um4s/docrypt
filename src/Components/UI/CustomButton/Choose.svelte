<script lang="ts">
  import LogoGeneric from "../SVG/LOGO/LogoGeneric.svelte";

  export let logo = LogoGeneric;
  export let title = "title";
  export let subtitle = "subtitle";
</script>

<section on:click>
  <svelte:component this={logo} height="64px" />
  <h1>{title}</h1>
  <h3>{subtitle}</h3>
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 8px;
    row-gap: 8px;
    user-select: none;
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
