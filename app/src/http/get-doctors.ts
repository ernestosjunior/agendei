import { getApiClient } from "../lib/api";

export async function getDoctors() {
  const { data } = await getApiClient().get("/doctors/");

  return data;
}
