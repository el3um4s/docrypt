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

const pageStore: Writable<Page> = writable("Home");

const page = {
  subscribe: pageStore.subscribe,
  set: (s: Page) => {
    pageStore.set(s);
  },
};

export default page;
