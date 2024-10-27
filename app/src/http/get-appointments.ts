import { getAuthApiClient } from "../lib/api";

export interface GetAppointmentsResponse {
  date: string;
  doctor: Doctor;
  hour: string;
  id: number;
  service: Service;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

export interface Service {
  description: string;
  id: number;
}

export async function getAppointments() {
  const api = await getAuthApiClient();
  const { data } = await api.get("/users/appointments/");

  return data as GetAppointmentsResponse[];
}
