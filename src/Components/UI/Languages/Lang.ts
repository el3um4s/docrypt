import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

import { setLang } from "./IndexDB";
import type { LangSupported } from "./Languages";

const languageStore: Writable<LangSupported> = writable("en");

const lang = {
  subscribe: languageStore.subscribe,
  set: (language: LangSupported) => {
    languageStore.set(language);
    setLang(language);
  },
};

export default lang;
