import { writable } from "svelte/store";

export const user = writable({
  _id: "",
  name: "",
  email: "",
  role: "",
  hasVoted: false,
  gamesVoted: [],
  avatar: "",
});
