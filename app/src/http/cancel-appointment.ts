import { getApiClient } from "../lib/api";

export async function cancelAppointment(id: number) {
  const { data } = await getApiClient().delete(`/appointments/${id}/`);

  return data;
}
