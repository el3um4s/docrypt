<script lang="ts">
  import textToConverter from "../../../Stores/TextToConverter";
  import password from "../../../Stores/Password";

  // import createBlobFromText from "../../Functions/CreateBlobFromText";

  // import * as aes from "micro-aes-gcm";
  import sjcl from "sjcl";

  $: base64 = JSON.parse($textToConverter).base64;

  // https://github.com/paulmillr/micro-aes-gcm
  // let password = "";
  // const key = new TextEncoder().encode(keyString);

  // $: ciphertext = aes.encrypt(key, base64);

  $: ciphertextPlain = sjcl.encrypt($password, base64);
  // $: console.log(JSON.parse(ciphertextPlain));

  $: parseCipher = () => {
    // @ts-ignore: TS2345: Argument of type 'SjclCipherEncrypted' is not assignable to parameter of type 'string'.
    const parsedMessage = JSON.stringify(JSON.parse(ciphertextPlain));
    return window.btoa(parsedMessage);
  };

  $: ciphertext = parseCipher();

  const shareText = () => {
    navigator.share({ text: ciphertext } as ShareData);
  };
</script>

<section>
  <!-- <div>
    {base64}
  </div>

  <div>
    {ciphertextPlain}
  </div> -->

  {ciphertext}
</section>

<button on:click={shareText}>Share Crypted Text</button>

<style lang="postcss">
  section {
    overflow-wrap: break-word;
  }
</style>
