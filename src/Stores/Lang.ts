import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

const languageStore: Writable<string> = writable("en");

const lang = {
  subscribe: languageStore.subscribe,
  set: (language: string) => {
    languageStore.set(language);
  },
};

export default lang;
