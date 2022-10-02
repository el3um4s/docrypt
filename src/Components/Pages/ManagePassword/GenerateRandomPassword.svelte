<script lang="ts">
  import { slide } from "svelte/transition";
  import password from "../../../Stores/Password";
  // https://www.npmjs.com/package/qrcode
  import QRCode from "qrcode";

  import newPassword from "../../../Functions/GenerateRandomPassword";

  import Button from "../../UI/CustomButton/Button.svelte";

  const pageLang = "GenerateRandomPassword";

  password.set("");

  $: p = $password;
  $: password.set(p);
  let canvas: HTMLCanvasElement;
  let pics;

  export let showInputPassword: boolean = true;

  $: if (canvas && $password != "") {
    QRCode.toCanvas(canvas, p);
  }
</script>

<section transition:slide>
  {#if showInputPassword}
    <input bind:value={p} placeholder="password" />
  {/if}

  <div class="item button-icon-red">
    <Button
      on:click={() => {
        password.set(newPassword());
      }}
      {pageLang}
      label="Generate Random Password"
    />
  </div>
  <canvas bind:this={canvas} transition:slide />
  {#if p != ""}
    <div class="item button-icon-red" transition:slide>
      <Button
        on:click={() => {
          const dataURL = canvas.toDataURL("image/png");
          const imageObject = new Image();
          imageObject.src = dataURL;

          pics.src = imageObject.src;

          let link = document.createElement("a");
          link.setAttribute("download", "download");
          link.href = pics.src;
          link.click();
        }}
        {pageLang}
        label="Save QR Code to Image"
      />
    </div>

    <div bind:this={pics} />
  {/if}
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* align-items: flex-start; */
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
    gap: 10px;
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

  canvas {
    width: 1px;
    height: 1px;
    border: 1px solid var(--color);
    border-radius: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
