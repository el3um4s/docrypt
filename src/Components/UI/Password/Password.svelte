<script lang="ts">
  import password from "../../../Stores/Password";
  import ReadQRCode from "../QRCode/ReadQRCode.svelte";

  $: p = $password;
  $: password.set(p);

  let fromQRCode = false;
</script>

<div>
  <input bind:value={p} placeholder="password" />
  <button
    on:click={() => {
      fromQRCode = !fromQRCode;
    }}>From QrCode</button
  >
  {#if fromQRCode}
    <ReadQRCode />
  {/if}
</div>
