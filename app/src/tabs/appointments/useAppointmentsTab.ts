import { useEffect, useState } from "react";
import {
  getAppointments,
  GetAppointmentsResponse,
} from "../../http/get-appointments";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";
import { cancelAppointment } from "../../http/cancel-appointment";

export function useAppointmentsTab() {
  const [appointments, setAppointments] = useState<GetAppointmentsResponse[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute<any>();

  async function fetchAppointments() {
    try {
      setIsLoading(true);
      const response = await getAppointments();
      setAppointments(response);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCancelAppointment(id: number) {
    setIsLoading(true);
    try {
      await cancelAppointment(id);
      await fetchAppointments();
    } catch (error) {
      Alert.alert("Erro", "Tente novamente");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    if (route?.params?.updateData) fetchAppointments();
  }, [route]);

  return {
    fetchAppointments,
    isLoading,
    appointments,
    handleCancelAppointment,
  };
}
