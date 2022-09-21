import { saveAs } from "file-saver";
import createBlobFromText from "./CreateBlobFromText";

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
