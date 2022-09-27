<script lang="ts">
  import QrScanner from "qr-scanner";
  import password from "../../../Stores/Password";

  import { onMount, onDestroy } from "svelte";

  let videoElem: HTMLVideoElement;
  let hasCamera: boolean = false;
  let listCameras: QrScanner.Camera[] = [];
  let cameraSelected: string;

  let cameraScanner: QrScanner;
  let p = "";
  $: password.set(p);

  onMount(async () => {
    // QrScanner.WORKER_PATH = "/qr-scanner-worker.min.js";
    // const scanner = new QrScanner(videoElem, (result) => {
    //   console.log(result);
    // });
    // scanner.start();

    hasCamera = await QrScanner.hasCamera();
    if (hasCamera) {
      cameraScanner = new QrScanner(
        videoElem,
        (result) => {
          // console.log("decoded qr code:", result);
          p = result.data;
          cameraScanner.stop();
        },
        {
          returnDetailedScanResult: true,
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );

      listCameras = await QrScanner.listCameras(true);
      // console.log(listCameras);
      cameraSelected = listCameras[0].id;
      cameraScanner.start();
    }
  });

  onDestroy(() => {
    if (cameraScanner) {
      cameraScanner.stop();
      cameraScanner.destroy();
      cameraScanner = null;
    }
  });
</script>

<div>
  {#if p != ""}
    <button
      on:click={() => {
        p = "";
        cameraScanner.start();
      }}>Scan Again</button
    >
    <div>Password</div>
    <div>{p}</div>
  {/if}
  {#if hasCamera}
    <select
      bind:value={cameraSelected}
      on:change={() => {
        cameraScanner.setCamera(cameraSelected);
      }}
    >
      {#each listCameras as camera}
        <option value={camera.id}>
          {camera.label}
        </option>
      {/each}
    </select>
  {/if}
  <video bind:this={videoElem} style:display={hasCamera ? "inline" : "none"} />
  {#if !hasCamera}
    <p>Camera not found</p>
  {/if}
</div>
<!-- <video bind:this={videoElem} /> -->
