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
  let component;
</script>

<section transition:slide>
  <input bind:value={p} placeholder="password" />
  <ButtonBarPassword
    {showButtonRandomPassword}
    on:qr-code-photo={() =>
      (component =
        component == ReadQRCodeFromPhoto ? null : ReadQRCodeFromPhoto)}
    on:qr-code-image={() =>
      (component =
        component == ReadQRCodeFromImage ? null : ReadQRCodeFromImage)}
    on:random-password={() =>
      (component =
        component == GenerateRandomPassword ? null : GenerateRandomPassword)}
  />
  <div>
    {#if component}
      <svelte:component this={component} {showInputPassword} />
    {/if}
  </div>
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
</style>
