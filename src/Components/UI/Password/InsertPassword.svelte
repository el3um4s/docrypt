<script lang="ts">
  import { slide } from "svelte/transition";

  import password from "../../../Stores/Password";
  import Button from "../CustomButton/Button.svelte";

  import ReadQRCodeFromPhoto from "../QRCode/ReadQRCodeFromPhoto.svelte";
  import ReadQRCodeFromImage from "../QRCode/ReadQRCodeFromImage.svelte";
  import GenerateRandomPassword from "../QRCode/GenerateRandomPassword.svelte";

  $: p = $password;
  $: password.set(p);

  let fromQRCode = false;
  let component;
</script>

<section transition:slide>
  <input bind:value={p} placeholder="password" />
  <div class="button-bar">
    <div class="item">
      <Button
        label="QR Code Photo"
        subtitle="Read QR Code from Photo"
        on:click={() =>
          (component =
            component == ReadQRCodeFromPhoto ? null : ReadQRCodeFromPhoto)}
      />
    </div>
    <div class="item">
      <Button
        label="QR Code Image"
        subtitle="Read QR Code from Image"
        on:click={() =>
          (component =
            component == ReadQRCodeFromImage ? null : ReadQRCodeFromImage)}
      />
    </div>
    <div class="item">
      <Button
        label="Random Password"
        subtitle="Generate Random Password"
        on:click={() =>
          (component =
            component == GenerateRandomPassword
              ? null
              : GenerateRandomPassword)}
      />
    </div>
  </div>
  <div>
    {#if component}
      <svelte:component this={component} />
    {/if}
  </div>
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .button-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* border: 4px solid var(--color-menu); */
  }

  .button-bar .item {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    text-align: center;
    border: 4px solid transparent;
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
</style>
