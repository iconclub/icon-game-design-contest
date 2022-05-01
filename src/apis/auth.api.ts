import { api } from "./http-client";

interface SignInPayload {
  idToken: string;
}

class AuthApi {
  public async sendPayload(payload: SignInPayload): Promise<{ accessToken: string }> {
    const res = await api.post("/auth/google/signin", payload);

    if (res.statusCode === 200) {
      return res.data;
    }

    throw new Error("Failed to sign in");
  }
}

export const authApi = new AuthApi();
