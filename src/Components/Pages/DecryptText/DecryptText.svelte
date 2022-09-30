<script lang="ts">
  import { slide } from "svelte/transition";
  import { Base64 } from "js-base64";
  import { toTry } from "@el3um4s/to-try";
  import sjcl from "sjcl";

  import password from "../../../Stores/Password";

  import MarkedText from "../../UI/MarkedText/MarkedText.svelte";
  import InsertPassword from "../../UI/Password/InsertPassword.svelte";

  let status: "Input" | "Password" | "Show" = "Input";

  const decodeText = (text: string, password: string): [string, boolean] => {
    const [decoded, errorDecoded] = toTry(() => Base64.decode(text));
    const [decrypted, errorDecrypted] = toTry(() =>
      sjcl.decrypt(password, decoded)
    );
    const [base64, errorBase64] = toTry(() => JSON.parse(decrypted).base64);
    const [result, errorResult] = toTry(() => Base64.decode(base64));

    if (errorDecoded | errorDecrypted | errorBase64 | errorResult) {
      return ["Error", false];
    }
    return result === undefined || result === null
      ? ["Error", false]
      : [result.toString(), true];
  };

  let cipherText = "";
  $: [text, success] = decodeText(cipherText, $password);
</script>

<section transition:slide>
  {#if status == "Input"}
    <div transition:slide>
      <h1>Input</h1>

      <h3>Write here the text to be decrypted</h3>

      <textarea
        bind:value={cipherText}
        placeholder="Write here the text to be decrypted"
      />

      <button on:click={() => (status = "Password")}>Next</button>
    </div>
  {:else if status == "Password"}
    <div transition:slide>
      <h1>Password</h1>

      <InsertPassword />

      <button on:click={() => (status = "Input")}>Back</button>
      <button on:click={() => (status = "Show")}>Next</button>
    </div>
  {:else if status == "Show" && success}
    <div transition:slide>
      <h1>Decrypted Text</h1>

      <MarkedText bind:text showPlainText={false} showHTML={true} />

      <button on:click={() => (status = "Password")}>Back</button>
      <button
        on:click={() => {
          status = "Input";
          cipherText = "";
        }}>New Text</button
      >
    </div>
  {:else if status == "Show" && !success}
    <div transition:slide>
      <h1>Decrypted Text</h1>

      <h3>Error</h3>

      <button on:click={() => (status = "Password")}>Back</button>
      <button
        on:click={() => {
          status = "Input";
          cipherText = "";
        }}>New Text</button
      >
    </div>
  {/if}
</section>
