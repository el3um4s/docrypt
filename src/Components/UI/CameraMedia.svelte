<script lang="ts">
  import { onMount } from "svelte";
  import textToConverter from "../../Stores/TextToConverter";

  let canvas;
  let player;
  let context;

  onMount(() => {
    context = canvas.getContext("2d");
  });
  const captureButton = document.getElementById("capture");

  const constraints = {
    video: true,
  };

  const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace("data:", "").replace(/^.+,/, "");
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video bind:this={player} controls autoplay />
<button
  on:click={() => {
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
  }}>Capture</button
>
<button
  on:click={() => {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      player.srcObject = stream;
    });
  }}>Record</button
>
<button
  on:click={() => {
    player.srcObject.getVideoTracks().forEach((track) => track.stop());
  }}>Stop</button
>
<canvas bind:this={canvas} width={320} height={240} />
<button
  on:click={() => {
    const dataURL = canvas.toDataURL("image/jpeg", 0.7);
    console.log(dataURL);
    const base64 = getBase64StringFromDataURL(dataURL);
    console.log(base64);
    textToConverter.set(base64);
  }}>Convert to base64</button
>
