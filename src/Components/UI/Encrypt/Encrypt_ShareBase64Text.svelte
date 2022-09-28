<script lang="ts">
  import textToConverter from "../../../Stores/TextToConverter";
  import password from "../../../Stores/Password";

  import { Base64 } from "js-base64";
  import sjcl from "sjcl";

  $: parseCipher = () => {
    const b64 = JSON.parse($textToConverter).base64;
    const ciphertextPlain = sjcl.encrypt($password, b64);
    // @ts-ignore: TS2345: Argument of type 'SjclCipherEncrypted' is not assignable to parameter of type 'string'.
    const { iv, salt, ct } = JSON.parse(ciphertextPlain);
    console.log(iv, salt);
    const parsedMessage = JSON.stringify({ iv, salt, ct });
    const result = Base64.encode(parsedMessage, true);
    return result;
  };

  $: ciphertext = parseCipher();

  const shareText = () => {
    navigator.share({ text: ciphertext } as ShareData);
  };
</script>

<section>
  {ciphertext}
</section>

<button on:click={shareText}>Share Crypted Text</button>

<style lang="postcss">
  section {
    overflow-wrap: break-word;
  }
</style>
