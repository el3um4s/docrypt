import { Blob as B } from "blob-polyfill";

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

export default createBlobFromText;
