<script lang="ts">
  import { slide } from "svelte/transition";
  import { Base64 } from "js-base64";
  import sjcl from "sjcl";

  import password from "../../../Stores/Password";

  import Button from "../../UI/CustomButton/Button.svelte";
  import IconNext from "../../UI/SVG/ICO/IconNext.svelte";
  import IconBack from "../../UI/SVG/ICO/IconBack.svelte";
  import IconNewMessage from "../../UI/SVG/ICO/IconNewMessage.svelte";

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

    const parsedMessage = JSON.stringify({ iv, salt, ct });
    const result = Base64.encode(parsedMessage, true);
    return result;
  };

  $: cipherText = encryptMessage();
</script>

<section transition:slide>
  {#if status === "Input"}
    <div transition:slide>
      <h1>Input</h1>
      <h3>Write here the text to be encrypted</h3>
      <MarkedText bind:text />

      <div class="button-bar">
        <Button
          label="Next"
          subtitle="Insert password"
          Icon={IconNext}
          on:click={() => (status = "Password")}
        />
      </div>
    </div>
  {:else if status === "Password"}
    <div transition:slide>
      <h1>Password</h1>
      <InsertPassword />

      <div class="button-bar">
        <Button
          label="Back"
          subtitle="Insert Text"
          Icon={IconBack}
          on:click={() => (status = "Input")}
        />
        <Button
          label="Next"
          subtitle="Show Encrypted text"
          Icon={IconNext}
          on:click={() => (status = "Show")}
        />
      </div>
    </div>
  {:else if status === "Show"}
    <div transition:slide>
      <h1>Show</h1>
      <EncryptedText {cipherText} />

      <div class="button-bar">
        <Button
          label="Password"
          subtitle="Insert password"
          Icon={IconBack}
          on:click={() => (status = "Password")}
        />
        <Button
          label="New Message"
          subtitle="Encrypt a new message"
          Icon={IconNewMessage}
          on:click={() => {
            status = "Input";
            text = "";
          }}
        />
      </div>
    </div>
  {/if}
</section>

<style lang="postcss">
  .button-bar {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 1rem;
    flex: 1 1 auto;
  }
</style>
