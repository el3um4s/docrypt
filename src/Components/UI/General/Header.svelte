<script lang="ts">
  import Logo from "../SVG/LOGO/Logo.svelte";

  import page from "../../../Stores/Page";
  import password from "../../../Stores/Password";

  $: p = $page;

  const goHome = () => {
    page.set("Home");
    password.set("");
    window.history.replaceState({}, document.title, "/");
  };
</script>

<header class="header-page {p}">
  <div
    on:click={goHome}
    on:keydown={(e) => {
      if (e.key === "Enter") {
        goHome();
      }
    }}
  >
    <Logo height="32px" />
  </div>
</header>
