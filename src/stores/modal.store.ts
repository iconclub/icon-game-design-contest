import { writable } from "svelte/store";

function createModalStore() {
  const { subscribe, set } = writable({
    visible: false,
  });

  return {
    subscribe,
    display: () => set({ visible: true }),
    hide: () => set({ visible: false }),
  };
}

export const modal = createModalStore();
