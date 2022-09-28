import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export type Page =
  | "Home"
  | "Encrypt"
  | "Decrypt"
  | "ManagePassword"
  | "Settings"
  | "About";

const pageStore: Writable<Page> = writable("Home");

const page = {
  subscribe: pageStore.subscribe,
  set: (s: Page) => {
    pageStore.set(s);
  },
};

export default page;
