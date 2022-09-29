<script lang="ts">
  import Logo from "../SVG/LOGO/Logo.svelte";

  import page from "../../../Stores/Page";
</script>

<header>
  <div on:click={() => page.set("Home")}>
    <Logo height="32px" />
  </div>
</header>
