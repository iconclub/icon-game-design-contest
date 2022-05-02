import { writable } from "svelte/store";

interface Game {
  _id: string;
  name: string;
}

export const votes = writable([]);

export const addVoteGame = (game: Game) => {
  votes.update((curr) => [...curr, game]);
};

export const removeVoteGame = (gameId: string) => {
  votes.update((curr) => curr.filter((g) => g._id !== gameId));
};
