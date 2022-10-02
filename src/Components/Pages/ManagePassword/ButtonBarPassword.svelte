<script lang="ts">
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  import Button from "../../UI/CustomButton/Button.svelte";
  import IconCamera from "../../UI/SVG/ICO/IconCamera.svelte";
  import IconQrCode from "../../UI/SVG/ICO/IconQRCode.svelte";
  import IconRandom from "../../UI/SVG/ICO/IconRandom.svelte";

  export let showButtonRandomPassword: boolean = true;

  const pageLang = "ButtonBarPassword";
</script>

<section transition:slide>
  <div class="button-bar">
    {#if showButtonRandomPassword}
      <div class="item button-icon-red">
        <Button
          {pageLang}
          LeftIcon={IconRandom}
          label="Random Password"
          subtitle="Generate Random Password"
          on:click={() => dispatch("random-password")}
        />
      </div>
    {/if}
    <div class="item button-icon-red">
      <Button
        {pageLang}
        LeftIcon={IconCamera}
        label="QR Code Photo"
        subtitle="Read a QR Code from a Photo"
        on:click={() => dispatch("qr-code-photo")}
      />
    </div>
    <div class="item button-icon-red">
      <Button
        {pageLang}
        LeftIcon={IconQrCode}
        label="QR Code Image"
        subtitle="Read a QR Code from an Image"
        on:click={() => dispatch("qr-code-image")}
      />
    </div>
  </div>
</section>

<style lang="postcss">
  .button-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* border: 4px solid var(--color-menu); */
  }

  .button-bar .item {
    flex: 1;
    min-width: 240px;
    padding: 4px;
    text-align: center;
    border: 4px solid transparent;
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
</style>
