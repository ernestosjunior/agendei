import { getApiClient } from "../lib/api";

interface CreateAccountRequest {
  name: string;
  email: string;
  password: string;
}

export async function createAccount({
  email,
  password,
  name,
}: CreateAccountRequest) {
  const { data } = await getApiClient().post(
    "/users/",
    JSON.stringify({
      email,
      password,
      name,
    })
  );

  return data;
}
