<script lang="ts">
  import textToConverter from "../../Stores/TextToConverter";

  // https://www.npmjs.com/package/blob-polyfill
  // import { Blob } from "blob-polyfill";
  // https://www.npmjs.com/package/file-saver
  // import { saveAs } from "file-saver";

  const saveBase64File = async () => {
    const fileHandle = await globalThis.showSaveFilePicker({
      suggestedName: "DoCrypt.txt",
      types: [{ description: "Text file", accept: { "text/plain": [".txt"] } }],
    });
    const fileStream = await fileHandle.createWritable();
    await fileStream.write(
      new Blob([$textToConverter], { type: "text/plain" })
    );
    await fileStream.close();
  };

  const saveBase64FileLegacy = async () => {
    let blob: Blob;
    let isBlobSupported = false;
    try {
      isBlobSupported = !!new Blob();
    } catch (e) {}

    if (isBlobSupported) {
      blob = new Blob([$textToConverter], { type: "text/plain" });
    } else {
      let B = await import("blob-polyfill");
      // const B = require("blob-polyfill").Blob;
      blob = new B([$textToConverter], { type: "text/plain" });
    }
    var FileSaver = require("file-saver");
    FileSaver.saveAs(blob, "map.svg");
  };

  const saveFile = async () => {
    if (!!globalThis.showSaveFilePicker) {
      await saveBase64File();
    } else {
      await saveBase64FileLegacy();
    }
  };
</script>

<button on:click={saveBase64FileLegacy}>Save Base64 File</button>
