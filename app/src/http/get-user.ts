import { getAuthApiClient } from "../lib/api";

export async function getUser() {
  const api = await getAuthApiClient();
  const { data } = await api.get("/users/");

  return data;
}
