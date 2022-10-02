<script lang="ts">
  import Logo from "../SVG/LOGO/Logo.svelte";

  import page from "../../../Stores/Page";

  $: p = $page;
</script>

<header class="header-page {p}">
  <div
    on:click={() => {
      page.set("Home");
      window.history.replaceState({}, document.title, "/");
    }}
  >
    <Logo height="32px" />
  </div>
</header>
