<script lang="ts">
  import "./css/tailwind.pcss";
  import Lang from "./Components/Default/Lang.svelte";
  import ChooseLanguage from "./Components/UI/ChooseLanguage.svelte";

  import Password from "./Components/UI/Password/Password.svelte";

  import File from "./Components/UI/File.svelte";
  import CameraInput from "./Components/UI/CameraInput.svelte";
  import CameraMedia from "./Components/UI/CameraMedia.svelte";
  import SaveBase64File from "./Components/UI/SaveBase64File.svelte";
  import ShareBase64File from "./Components/UI/ShareBase64File.svelte";
  import VersionNumber from "./Components/UI/VersionNumber.svelte";

  import Encrypt_MarkedText from "./Components/UI/Encrypt/Encrypt_MarkedText.svelte";
  import ShareBase64Text from "./Components/UI/Encrypt/Encrypt_ShareBase64Text.svelte";

  import Decrypt_MarkedText from "./Components/UI/Decrypt/Decrypt_MarkedText.svelte";

  import textToConverter from "./Stores/TextToConverter";
  import status from "./Stores/Status";

  import GenerateQrCode from "./Components/UI/QRCode/GenerateQRCode.svelte";
  import ReadQRCodeFromPhoto from "./Components/UI/QRCode/ReadQRCodeFromPhoto.svelte";
  import ReadQRCodeFromImage from "./Components/UI/QRCode/ReadQRCodeFromImage.svelte";

  let component = null;
</script>

<svelte:head>
  <title>DoCrypt</title>
</svelte:head>

<main>
  <h1>DoCrypt</h1>

  {#if $status != "start"}
    <button
      on:click={() => {
        status.set("start");
        component = null;
        textToConverter.set("");
      }}>Home</button
    >
  {/if}

  {#if $status == "start"}
    <div>
      <button
        on:click={() => {
          status.set("encrypt");
          textToConverter.set("");
        }}><Lang c="menu" v="encrypt" /></button
      >
      <button
        on:click={() => {
          status.set("decrypt");
          textToConverter.set("");
        }}><Lang c="menu" v="decrypt" /></button
      >
      <button
        on:click={() => {
          status.set("password");
          textToConverter.set("");
          component = null;
        }}><Lang c="menu" v="password" /></button
      >
    </div>
  {/if}

  {#if $status == "encrypt" && component == null}
    <div>
      <button
        on:click={() => {
          component = Encrypt_MarkedText;
          textToConverter.set("");
        }}><Lang c="menu" v="message" /></button
      >
      <!-- <button on:click={() => (component = File)}
        ><Lang c="menu" v="files" /></button
      > -->
    </div>
  {/if}

  {#if $status == "decrypt" && component == null}
    <div>
      <button
        on:click={() => {
          component = Decrypt_MarkedText;
          textToConverter.set("");
        }}><Lang c="menu" v="message" /></button
      >
      <!-- <button on:click={() => (component = File)}
        ><Lang c="menu" v="files" /></button
      > -->
    </div>
  {/if}

  {#if $status == "password"}
    <div>
      <button
        on:click={() => {
          component = GenerateQrCode;
        }}>Generate Random Password</button
      >
      <button
        on:click={() => {
          component = ReadQRCodeFromPhoto;
        }}>Read from QR Code (photo)</button
      >
      <button
        on:click={() => {
          component = ReadQRCodeFromImage;
        }}>Read from QR Code (image)</button
      >
      <!-- <GenerateQrCode />
      <ReadQRCode /> -->
    </div>
  {/if}

  {#if $status != "start"}
    <svelte:component this={component} />
  {/if}

  <!-- {#if $status == "encrypt" && component && $textToConverter != ""} -->
  {#if $status == "encrypt" && component}
    <Password />

    {#if component != Encrypt_MarkedText}
      <div>
        <SaveBase64File /><ShareBase64File />
      </div>
    {/if}

    {#if component == Encrypt_MarkedText}
      <ShareBase64Text />
    {/if}
  {/if}
  <!-- <div>
    <button>Original</button>
    <button>Transformed</button>
  </div> -->

  <div>
    <!--
    
    <button on:click={() => (component = File)}
      ><Lang c="menu" v="files" /></button
    >
    <button on:click={() => (component = CameraInput)}
      ><Lang c="menu" v="photoNative" /></button
    >
    <button on:click={() => (component = CameraMedia)}
      ><Lang c="menu" v="photoWebCam" /></button
    > -->
  </div>

  <ChooseLanguage />
  <VersionNumber />
</main>

<style lang="postcss">
  main {
    @apply w-full max-w-4xl mx-auto p-4;
  }
</style>
