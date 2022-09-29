<script lang="ts">
  import { slide } from "svelte/transition";
  import { Base64 } from "js-base64";
  import sjcl from "sjcl";

  import password from "../../../Stores/Password";

  import MarkedText from "../../UI/MarkedText/MarkedText.svelte";
  import InsertPassword from "../../UI/Password/InsertPassword.svelte";
  import EncryptedText from "./EncryptedText.svelte";

  let status: "Input" | "Password" | "Show" = "Input";

  let text = ``;
  let objToEncrypt: {
    name: string;
    type: string;
    size: number;
    base64: string;
  } = { name: "", type: "", size: 0, base64: "" };

  $: {
    const name = "message.txt";
    const type = "text/plain";
    const size = text.length;
    const base64 = Base64.encode(text, true);

    objToEncrypt = { name, type, size, base64 };
  }

  $: encryptMessage = () => {
    const b64 = JSON.stringify(objToEncrypt);
    const ciphertextPlain = sjcl.encrypt($password, b64);
    // @ts-ignore: TS2345: Argument of type 'SjclCipherEncrypted' is not assignable to parameter of type 'string'.
    const { iv, salt, ct } = JSON.parse(ciphertextPlain);
    console.log(iv, salt);
    const parsedMessage = JSON.stringify({ iv, salt, ct });
    const result = Base64.encode(parsedMessage, true);
    return result;
  };

  $: cipherText = encryptMessage();
</script>

<section transition:slide>
  {#if status === "Input"}
    <div>
      <h1>Input</h1>
      <h3>Write here the text to be encrypted</h3>
      <MarkedText bind:text />
      <button on:click={() => (status = "Password")}>Next</button>
    </div>
  {:else if status === "Password"}
    <div transition:slide>
      <h1>Password</h1>
      <InsertPassword />
      <button on:click={() => (status = "Show")}>Next</button>
    </div>
  {:else if status === "Show"}
    <div transition:slide>
      <h1>Show</h1>
      <EncryptedText {cipherText} />
      <button
        on:click={() => {
          status = "Input";
          text = "";
        }}>New Message</button
      >
    </div>
  {/if}
</section>
