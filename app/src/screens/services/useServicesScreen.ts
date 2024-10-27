import { useEffect, useState } from "react";
import {
  GetDoctorServices,
  getDoctorServices,
} from "../../http/get-doctor-services";
import { useRoute } from "@react-navigation/native";

export function useServicesScreen() {
  const route = useRoute<any>();
  const { doctor_id } = route.params;

  const doctorId = Number(doctor_id);

  const [services, setServices] = useState({} as GetDoctorServices);
  const [loadingServices, setLoadingServices] = useState(false);

  async function fetchServices() {
    setLoadingServices(true);
    try {
      const res = await getDoctorServices(doctorId);
      setServices(res);
    } finally {
      setLoadingServices(false);
    }
  }

  useEffect(() => {
    if (doctorId) fetchServices();
  }, [doctorId]);

  return { services, loadingServices, fetchServices };
}
