<script lang="ts">
  import textToConverter from "../../Stores/TextToConverter";
  // import createBlobFromText from "../../Functions/CreateBlobFromText";

  // import * as aes from "micro-aes-gcm";
  import sjcl from "sjcl";

  $: base64 = JSON.parse($textToConverter).base64;
  const shareText = () => {
    navigator.share({ text: base64 } as ShareData);
  };

  // https://github.com/paulmillr/micro-aes-gcm
  const password = "ciao";
  // const key = new TextEncoder().encode(keyString);

  // $: ciphertext = aes.encrypt(key, base64);
  $: ciphertextPlain = sjcl.encrypt(password, base64);
  // $: console.log(JSON.parse(ciphertextPlain));

  $: parseCipher = () => {
    // @ts-ignore: TS2345: Argument of type 'SjclCipherEncrypted' is not assignable to parameter of type 'string'.
    const parsedMessage = JSON.stringify(JSON.parse(ciphertextPlain));
    return window.btoa(parsedMessage);
  };

  $: ciphertext = parseCipher();
</script>

<div>
  {base64}
</div>

<div>
  {ciphertextPlain}
</div>

<div>
  {ciphertext}
</div>

<button on:click={shareText}>Share Crypted Text</button>
