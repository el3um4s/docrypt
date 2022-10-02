<script lang="ts">
  import "./css/tailwind.pcss";
  import Header from "./Components/UI/General/Header.svelte";

  import match from "@el3um4s/match";
  import page from "./Stores/Page";
  import { isOfTypePage } from "./Stores/Page";
  import Home from "./Components/Pages/Home/Home.svelte";
  import About from "./Components/Pages/About/About.svelte";
  import Settings from "./Components/Pages/Settings/Settings.svelte";
  import EncryptText from "./Components/Pages/EncryptText/EncryptText.svelte";
  import DecryptText from "./Components/Pages/DecryptText/DecryptText.svelte";
  import ManagePassword from "./Components/Pages/ManagePassword/ManagePassword.svelte";

  const searchParams = new URL(location.href).searchParams;
  const pageParam: string = searchParams.get("page");
  const cryptedLink: string = searchParams.get("message");

  if (cryptedLink) {
    page.set("DecryptText");
  } else if (pageParam) {
    page.set(isOfTypePage(pageParam) ? pageParam : "Home");
  }

  let pageSelected: any;

  $: pageSelected = match($page)
    .on("Home", () => {
      return Home;
    })
    .on("EncryptText", () => {
      return EncryptText;
    })
    .on("DecryptText", () => {
      return DecryptText;
    })
    .on("ManagePassword", () => {
      return ManagePassword;
    })
    .on("Settings", () => {
      return Settings;
    })
    .on("About", () => {
      return About;
    })
    .otherwise(() => {
      console.log("page not found");
      return null;
    });
</script>

<svelte:head>
  <title>DoCrypt</title>
</svelte:head>

<Header />
<main>
  <svelte:component this={pageSelected} />
</main>

<style lang="postcss">
  main {
    @apply w-full max-w-4xl mx-auto p-8;
  }
</style>
