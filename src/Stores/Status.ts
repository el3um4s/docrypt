import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

type Status = "start" | "encrypt" | "decrypt";

const statusStore: Writable<Status> = writable("start");

const status = {
  subscribe: statusStore.subscribe,
  set: (s: Status) => {
    statusStore.set(s);
  },
};

export default status;
