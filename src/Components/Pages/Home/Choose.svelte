<script lang="ts">
  import p from "../../../Stores/Page";
  import type { Page } from "../../../Stores/Page";

  import LogoIcon from "../../UI/SVG/Logo.svelte";

  export let logo = LogoIcon;
  export let title = "title";
  export let subtitle = "subtitle";

  export let page: Page = "Home";
</script>

<section
  on:click={() => {
    // console.log(page);
    p.set(page);
  }}
>
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
