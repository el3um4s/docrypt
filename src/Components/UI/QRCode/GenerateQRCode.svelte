<script lang="ts">
  import password from "../../../Stores/Password";
  // https://www.npmjs.com/package/qrcode
  import QRCode from "qrcode";

  import newPassword from "../../../Functions/GenerateRandomPassword";

  // https://github.com/paulmillr/micro-password-generator
  // import * as pwd from "micro-password-generator";
  // https://www.npmjs.com/package/@noble/hashes
  // import { randomBytes } from "@noble/hashes/utils";

  $: p = $password;
  $: password.set(p);
  let canvas: HTMLCanvasElement;

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
      p = newPassword(100);
      // console.log(p);
    }}>Generate Password</button
  >
  <canvas bind:this={canvas} />
</div>
