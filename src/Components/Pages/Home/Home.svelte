<script lang="ts">
  import { slide } from "svelte/transition";

  import Choose from "./Choose.svelte";
  import LogoEncryptText from "../../UI/SVG/LOGO/LogoEncryptText.svelte";
  import LogoDecryptText from "../../UI/SVG/LOGO/LogoDecryptText.svelte";
  import LogoSettings from "../../UI/SVG/LOGO/LogoSettings.svelte";
  import LogoPassword from "../../UI/SVG/LOGO/LogoPassword.svelte";
  import LogoAbout from "../../UI/SVG/LOGO/LogoAbout.svelte";
</script>

<section transition:slide>
  <div class="item yellow">
    <Choose
      logo={LogoEncryptText}
      title="Encrypt"
      subtitle="Encrypt your text"
      page="EncryptText"
    />
  </div>
  <div class="item green">
    <Choose
      logo={LogoDecryptText}
      title="Decrypt"
      subtitle="Decrypt your text"
      page="DecryptText"
    />
  </div>
  <div class="item orange">
    <Choose
      logo={LogoPassword}
      title="Password"
      subtitle="Manage your password"
      page="ManagePassword"
    />
  </div>
  <div class="item blue">
    <Choose
      logo={LogoSettings}
      title="Settings"
      subtitle="Language and other settings"
      page="Settings"
    />
  </div>
  <div class="item purple">
    <Choose
      logo={LogoAbout}
      title="About"
      subtitle="About this app"
      page="About"
    />
  </div>
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    text-align: center;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
</style>
