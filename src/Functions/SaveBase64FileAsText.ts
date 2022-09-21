import { Blob as B } from "blob-polyfill";
import { saveAs } from "file-saver";

const suggestedName = "DoCrypt.txt";

const createBlobFromText = (text: string) => {
  let blob: Blob;
  let isBlobSupported = false;
  try {
    isBlobSupported = !!new Blob();
  } catch (e) {}

  if (isBlobSupported) {
    blob = new Blob([text], { type: "text/plain" });
  } else {
    blob = new B([text], { type: "text/plain" });
  }
  return blob;
};

const saveBase64FileAsText = async (settings: {
  text: string;
  showSaveFilePickerSupported?: boolean;
  fileName: string;
}) => {
  const {
    text,
    showSaveFilePickerSupported = false,
    fileName = "DoCrypt.txt",
  } = settings;
  const blob = createBlobFromText(text);
  if (showSaveFilePickerSupported) {
    const fileHandle = await globalThis.showSaveFilePicker({
      suggestedName: fileName,
      types: [{ description: "Text file", accept: { "text/plain": [".txt"] } }],
    });
    const fileStream = await fileHandle.createWritable();
    await fileStream.write(blob, { type: "text/plain" });
    await fileStream.close();
  } else {
    saveAs(blob, fileName);
  }
};

export default saveBase64FileAsText;
