import { writable } from "svelte/store";

export const game = writable({
  list: [],
  playing: "",
});
