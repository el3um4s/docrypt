<script lang="ts">
  import Logo from "../SVG/LOGO/Logo.svelte";

  import page from "../../../Stores/Page";
  import password from "../../../Stores/Password";
  import notifications from "../Notification/Notification";

  $: p = $page;

  const goHome = () => {
    page.set("Home");
    if ($password != "") {
      password.set("");
      notifications.send({
        message: "Password deleted",
        type: "danger",
        timeout: 2000,
      });
    }
    window.history.replaceState({}, document.title, "/");
  };
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<header class="header-page {p}">
  <div
    tabindex="0"
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

<style>
  div:focus {
    outline: 2px solid var(--color);
  }
</style>
