import { api } from "./http-client";

interface Game {
  _id: string;
  name: string;
  team: string;
  source: string;
  thumbnail: string;
}

class GameApi {
  public async findAll(): Promise<Game[]> {
    const res = await api.get("/api/games");

    if (res.statusCode === 200) {
      return res.data;
    }

    throw new Error("Failed to find all games");
  }
}

export const gameApi = new GameApi();
