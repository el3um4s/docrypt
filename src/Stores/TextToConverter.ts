import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

const textToConverterStore: Writable<string> = writable("");

const textToConverter = {
  subscribe: textToConverterStore.subscribe,
  set: (text: string) => {
    textToConverterStore.set(text);
  },
};

export default textToConverter;
