import { getApiClient } from "../lib/api";

interface LoginRequest {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginRequest) {
  const { data } = await getApiClient().post(
    "/auth/token/",
    JSON.stringify({
      email,
      password,
    })
  );

  return data;
}
