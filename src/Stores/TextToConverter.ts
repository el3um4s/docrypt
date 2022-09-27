import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

const textToConverterStore: Writable<string> = writable("");

const textToConverter = {
  subscribe: textToConverterStore.subscribe,
  set: (text: string) => {
    textToConverterStore.set(text);
    console.log("textToConverterStore");
    console.log(text);
  },
};

export default textToConverter;
