<script lang="ts">
  import { slide } from "svelte/transition";

  import password from "../../../Stores/Password";
  import ButtonBarPassword from "./ButtonBarPassword.svelte";

  import ReadQRCodeFromPhoto from "./ReadQRCodeFromPhoto.svelte";
  import ReadQRCodeFromImage from "./ReadQRCodeFromImage.svelte";
  import GenerateRandomPassword from "./GenerateRandomPassword.svelte";

  $: p = $password;
  $: password.set(p);

  export let showInputPassword: boolean = true;
  export let showButtonRandomPassword: boolean = true;

  let component = null;
  let value = 0;

  const pageLang = "InsertPassword";
</script>

<section transition:slide>
  <input bind:value={p} placeholder="password" />
  <ButtonBarPassword
    {showButtonRandomPassword}
    on:qr-code-photo={() => {
      component = component == ReadQRCodeFromPhoto ? null : ReadQRCodeFromPhoto;
      value += 1;
    }}
    on:qr-code-image={() => {
      component = component == ReadQRCodeFromImage ? null : ReadQRCodeFromImage;
      value += 1;
    }}
    on:random-password={() => {
      component =
        component == GenerateRandomPassword ? null : GenerateRandomPassword;
      value += 1;
    }}
  />
  {#if component}
    <div transition:slide class="component">
      {#key value}
        <svelte:component this={component} {showInputPassword} />
      {/key}
    </div>
  {/if}
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    border: 1px solid var(--color);
    border-radius: 0.5rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .component {
    border: 4px solid var(--color-menu);
    color: var(--color);
    padding: 10px;
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }
</style>
