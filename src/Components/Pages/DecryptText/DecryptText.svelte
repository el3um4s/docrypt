<script lang="ts">
  import { slide } from "svelte/transition";
  import { Base64 } from "js-base64";
  import { toTry } from "@el3um4s/to-try";
  import sjcl from "sjcl";

  import password from "../../../Stores/Password";

  import Button from "../../UI/CustomButton/Button.svelte";
  import IconNext from "../../UI/SVG/ICO/IconNext.svelte";
  import IconBack from "../../UI/SVG/ICO/IconBack.svelte";
  import IconNewMessage from "../../UI/SVG/ICO/IconNewMessage.svelte";

  import MarkedText from "../../UI/MarkedText/MarkedText.svelte";
  import InsertPassword from "../ManagePassword/InsertPassword.svelte";

  const searchParams = new URL(location.href).searchParams;
  const cryptedLink: string = searchParams.get("message");

  let cipherText = "";
  if (cryptedLink) {
    cipherText = cryptedLink;
  }

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

  $: [text, success] = decodeText(cipherText, $password);
</script>

<section transition:slide>
  {#if status == "Input"}
    <div transition:slide>
      <div class="title-section">
        <h1>Input</h1>

        <h3>Write here the text to be decrypted</h3>
      </div>
      <div class="textarea" transition:slide>
        <textarea
          bind:value={cipherText}
          placeholder="Write here the text to be decrypted"
        />
      </div>
      <div class="button-bar">
        <div class="item">
          <Button
            label="Next"
            subtitle="Insert password"
            RightIcon={IconNext}
            on:click={() => (status = "Password")}
          />
        </div>
      </div>
    </div>
  {:else if status == "Password"}
    <div transition:slide>
      <div class="title-section">
        <h1>Password</h1>
      </div>
      <InsertPassword
        showInputPassword={false}
        showButtonRandomPassword={false}
      />

      <div class="button-bar">
        <div class="item">
          <Button
            label="Back"
            subtitle="Insert Crypted Text"
            LeftIcon={IconBack}
            on:click={() => (status = "Input")}
          />
        </div>
        <div class="item">
          <Button
            label="Next"
            subtitle="Show Decrypted text"
            RightIcon={IconNext}
            on:click={() => (status = "Show")}
          />
        </div>
      </div>
    </div>
  {:else if status == "Show" && success}
    <div transition:slide>
      <div class="title-section">
        <h1>Decrypted Text</h1>
      </div>
      <MarkedText bind:text showPlainText={false} showHTML={true} />

      <div class="button-bar">
        <div class="item">
          <Button
            label="Password"
            subtitle="Insert password"
            LeftIcon={IconBack}
            on:click={() => (status = "Password")}
          />
        </div>
        <div class="item">
          <Button
            label="New Decryption"
            subtitle="Decrypt a new message"
            RightIcon={IconNewMessage}
            on:click={() => {
              window.history.replaceState({}, document.title, "/");
              status = "Input";
              cipherText = "";
            }}
          />
        </div>
      </div>
    </div>
  {:else if status == "Show" && !success}
    <div transition:slide>
      <div class="title-section">
        <h1>Decrypted Text</h1>

        <h3>Error</h3>
      </div>
      <div class="textarea" transition:slide>
        <div class="errorMessage">
          <p>Oops, something went wrong.</p>

          <p>Check if the password and the text are correct.</p>
        </div>
      </div>

      <div class="button-bar">
        <div class="item">
          <Button
            label="Password"
            subtitle="Insert password"
            LeftIcon={IconBack}
            on:click={() => (status = "Password")}
          />
        </div>
        <div class="item">
          <Button
            label="New Decryption"
            subtitle="Decrypt a new message"
            RightIcon={IconNewMessage}
            on:click={() => {
              window.history.replaceState({}, document.title, "/");
              status = "Input";
              cipherText = "";
            }}
          />
        </div>
      </div>
    </div>
  {/if}
</section>

<style lang="postcss">
  .textarea {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    border: 4px solid var(--color-menu);
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }
  textarea {
    width: 100%;
    min-height: 360px;
    padding: 0.25em;
  }

  .errorMessage {
    padding: 10px;
    color: var(--color-red);
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }

  .title-section {
    border: 4px solid var(--color-menu);
    color: var(--color);
    padding: 10px;
    border-radius: 2px;
    margin: 0px;
    transition: all 0.5s ease-in-out;
  }
  .button-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border: 4px solid var(--color-menu);
  }

  .button-bar .item {
    flex: 1;
    min-width: 240px;
    padding: 10px;
    text-align: center;
    border: 4px solid transparent;
    border-radius: 2px;
    margin: 0px;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
  }
</style>
