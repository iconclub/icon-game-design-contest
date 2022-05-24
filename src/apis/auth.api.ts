import { api } from "./http-client";

interface SignInPayload {
  idToken: string;
}

class AuthApi {
  public async signInWithGoogle(payload: SignInPayload): Promise<{ accessToken: string }> {
    const res = await api.post("/auth/google/signin", payload);

    if (res.statusCode === 200) {
      return res.data;
    }

    throw new Error("Failed to sign in");
  }

  public async signOut() {
    const res = await api.post("/auth/signout");

    if (res.statusCode === 200) {
      return res.data;
    }

    throw new Error("Failed to sign out");
  }

  public async getProfile() {
    const res = await api.post("/auth/profile");

    if (res.statusCode === 200) {
      return res.data;
    }

    if (res.statusCode === 401) {
      return null;
    }

    if (res.statusCode === 404) {
      return null;
    }

    throw new Error("Failed to get profile");
  }
}

export const authApi = new AuthApi();
