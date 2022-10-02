import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export type Page =
  | "Home"
  | "EncryptText"
  | "DecryptText"
  | "ManagePassword"
  | "Settings"
  | "About"
  | "EncryptFile"
  | "DecryptFile"
  | "EncryptPhotoStream"
  | "EncryptPhothoApp";

export const isOfTypePage = (keyInput: string): keyInput is Page => {
  return [
    "Home",
    "EncryptText",
    "DecryptText",
    "ManagePassword",
    "Settings",
    "About",
    "EncryptFile",
    "DecryptFile",
    "EncryptPhotoStream",
    "EncryptPhothoApp",
  ].includes(keyInput);
};

const pageStore: Writable<Page> = writable("Home");

const page = {
  subscribe: pageStore.subscribe,
  set: (s: Page) => {
    pageStore.set(s);
  },
};

export default page;
