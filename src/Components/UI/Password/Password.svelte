<script lang="ts">
  import password from "../../../Stores/Password";
  import ReadQRCodeFromPhoto from "../QRCode/ReadQRCodeFromPhoto.svelte";
  import ReadQRCodeFromImage from "../QRCode/ReadQRCodeFromImage.svelte";

  $: p = $password;
  $: password.set(p);

  let fromQRCode = false;
  let component;
</script>

<div>
  <input bind:value={p} placeholder="password" />
  <button
    on:click={() => {
      fromQRCode = component == ReadQRCodeFromPhoto ? false : true;
      component = component == ReadQRCodeFromPhoto ? null : ReadQRCodeFromPhoto;
    }}>From QrCode (Photo)</button
  >
  <button
    on:click={() => {
      fromQRCode = component == ReadQRCodeFromImage ? false : true;
      component = component == ReadQRCodeFromImage ? null : ReadQRCodeFromImage;
    }}>From QrCode (Image)</button
  >
  {#if fromQRCode}
    <svelte:component this={component} />
  {/if}
</div>
