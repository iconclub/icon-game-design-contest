import { writable } from "svelte/store";

export const auth = writable({
  hasSignedIn: false,
  isBanned: false,
});
