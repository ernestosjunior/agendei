import { getApiClient, getAuthApiClient } from "../lib/api";

interface CreateScheduleRequest {
  date: string;
  hour: string;
  service_id: number;
  doctor_id: number;
}

export async function createSchedule({
  date,
  doctor_id,
  hour,
  service_id,
}: CreateScheduleRequest) {
  const api = await getAuthApiClient();
  const { data } = await api.post(
    "/appointments/",
    JSON.stringify({
      date,
      doctor_id,
      hour,
      service_id,
    })
  );

  return data;
}
