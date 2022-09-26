<script lang="ts">
  import password from "../../../Stores/Password";
  // https://www.npmjs.com/package/qrcode
  import QRCode from "qrcode";

  let p = $password;
  $: password.set(p);
  let canvas: HTMLCanvasElement;

  $: if (canvas && $password != "") {
    QRCode.toCanvas(canvas, p);
  }
</script>

<div>
  <input bind:value={p} placeholder="password" />
  <button>Generate Password</button>
  <canvas bind:this={canvas} />
</div>
