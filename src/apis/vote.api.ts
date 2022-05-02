import { api } from "./http-client";

class VoteApi {
  public async sendVotes(voter: string, games: string[]): Promise<any> {
    const payload = { voter, games };

    const res = await api.post("/api/vote", payload);

    if (res.statusCode === 200) {
      return res.data;
    }

    if (res.statusCode === 400) {
      throw new Error("You can only vote once");
    }

    throw new Error("Failed to vote");
  }
}

export const voteApi = new VoteApi();
