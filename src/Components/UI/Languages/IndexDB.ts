import { get, set, createStore } from "idb-keyval";

import type { LangSupported } from "./Languages";
import { isOfTypeLangSupported } from "./Languages";

const customDbName = "idb-lang";
const customStoreName = "idb-lang-store";

const customStore = createStore(customDbName, customStoreName);

export const setLang = async (l: LangSupported) => {
  await set("lang", l, customStore);
};

export const getLang = async () => {
  const lang = await get("lang", customStore);

  let l = getBrowserLanguage();

  if (lang === undefined) {
    await setLang(l);
    return l;
  }

  return lang;
};

function getBrowserLanguage(): LangSupported {
  const lang = navigator.language.split("-")[0].toLowerCase();
  const result = isOfTypeLangSupported(lang) ? lang : "en";
  return result;
}
