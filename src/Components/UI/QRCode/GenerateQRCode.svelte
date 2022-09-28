<script lang="ts">
  import password from "../../../Stores/Password";
  // https://www.npmjs.com/package/qrcode
  import QRCode from "qrcode";

  import newPassword from "../../../Functions/GenerateRandomPassword";

  // https://github.com/paulmillr/micro-password-generator
  //  import * as pwd from "micro-password-generator";
  // https://www.npmjs.com/package/@noble/hashes
  // import { randomBytes } from "@noble/hashes/utils";

  $: p = $password;
  $: password.set(p);
  let canvas: HTMLCanvasElement;
  let pics;

  $: if (canvas && $password != "") {
    QRCode.toCanvas(canvas, p);
  }
</script>

<div>
  <input bind:value={p} placeholder="password" />
  <button
    on:click={() => {
      // p = new TextDecoder().decode(randomBytes(16));
      //   p = pwd.secureMask.apply(randomBytes(32)).password;
      // p = newPassword(32);
      p = newPassword();
      // console.log(p);
    }}>Generate Password</button
  >
  <canvas bind:this={canvas} />
  {#if p != ""}
    <button
      on:click={() => {
        const dataURL = canvas.toDataURL("image/png");
        const imageObject = new Image();
        imageObject.src = dataURL;

        pics.src = imageObject.src;

        let link = document.createElement("a");
        link.setAttribute("download", "download");
        link.href = pics.src;
        link.click();
      }}>Save QRCode to Image</button
    >

    <div bind:this={pics} />
  {/if}
</div>
