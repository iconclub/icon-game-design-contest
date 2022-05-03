import { writable } from "svelte/store";

export const user = writable({
  _id: "",
  name: "",
  email: "",
  avatar: "",
  role: "",
  hasVoted: false,
  gamesVoted: [],
});
