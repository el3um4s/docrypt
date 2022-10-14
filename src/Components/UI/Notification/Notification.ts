import { writable, derived } from "svelte/store";
import type { Writable } from "svelte/store";

const TIMEOUT = 3000;

type MessageType = "default" | "danger" | "warning" | "info" | "success";

export interface Msg {
  type: MessageType;
  message: string;
  timeout?: number;
}

interface Message {
  id: string;
  msg: Msg;
}

const idGenerator = (): string =>
  "_" + Math.random().toString(36).substring(2, 9);

const notificationStore: Writable<Message[]> = writable([]);

const notifications = {
  subscribe: notificationStore.subscribe,
  send: (msg: Msg, id: string = idGenerator()) => {
    notificationStore.update((n) => {
      return [...n, { id, msg }];
    });
    setTimeout(
      () => {
        notificationStore.update((n) => {
          return n.filter((m) => m.id !== id);
        });
      },
      msg?.timeout ? msg.timeout : TIMEOUT
    );
  },
  remove: (id: string) => {
    notificationStore.update((n) => {
      return n.filter((m) => m.id !== id);
    });
  },
};

export default notifications;
