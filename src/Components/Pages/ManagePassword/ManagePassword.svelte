<script lang="ts">
  import { slide } from "svelte/transition";

  import Choose from "../../UI/CustomButton/Choose.svelte";
  import GenerateRandomPassword from "./GenerateRandomPassword.svelte";
  import ReadQRCodeFromPhoto from "./ReadQRCodeFromPhoto.svelte";
  import ReadQRCodeFromImage from "./ReadQRCodeFromImage.svelte";

  import LogoRandomPassword from "../../UI/SVG/LOGO/LogoRandomPassword.svelte";
  import LogoPasswordFromImage from "../../UI/SVG/LOGO/LogoPasswordFromImage.svelte";
  import LogoPasswordFromPhoto from "../../UI/SVG/LOGO/LogoPasswordFromPhoto.svelte";

  import ButtonBarPassword from "./ButtonBarPassword.svelte";

  let component = null;
</script>

<section transition:slide>
  {#if component == null}
    <div class="item yellow">
      <Choose
        logo={LogoRandomPassword}
        title="Random Password"
        subtitle="Generate Random Password"
        on:click={() => {
          component = GenerateRandomPassword;
        }}
      />
    </div>
    <div class="item green">
      <Choose
        logo={LogoPasswordFromPhoto}
        title="QR Code Photo"
        subtitle="Read a QR Code from a photo"
        on:click={() => {
          component = ReadQRCodeFromPhoto;
        }}
      />
    </div>
    <div class="item orange">
      <Choose
        logo={LogoPasswordFromImage}
        title="QR Code Image"
        subtitle="Read a QR Code from an image"
        on:click={() => {
          component = ReadQRCodeFromImage;
        }}
      />
    </div>
  {:else}
    <div>
      <div class="item">
        <ButtonBarPassword
          on:qr-code-image={() => {
            component = ReadQRCodeFromImage;
          }}
          on:qr-code-photo={() => {
            component = ReadQRCodeFromPhoto;
          }}
          on:random-password={() => {
            component = GenerateRandomPassword;
          }}
        />
      </div>
      <div class="item">
        <svelte:component this={component} />
      </div>
    </div>
  {/if}
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
