import { writable } from "svelte/store";

export const game = writable({
  list: [],
  playing: {
    name: "",
    source: "",
    description: "",
    members: [""],
  },
});
