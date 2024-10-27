import { getApiClient } from "../lib/api";

interface Service {
  description: string;
  id: number;
  price: number;
}

interface Doctor {
  icon: string;
  id: number;
  name: string;
  specialty: string;
}

export interface GetDoctorServices {
  doctor: Doctor;
  services: Service[];
}

export async function getDoctorServices(id: number) {
  const { data } = await getApiClient().get(`/doctors/${id}/services/`);

  const parsedData: GetDoctorServices = data;

  return parsedData;
}
