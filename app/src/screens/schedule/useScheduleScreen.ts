import { useNavigation, useRoute } from "@react-navigation/native";
import { generateHours } from "../../utils";
import { useState } from "react";
import { createSchedule } from "../../http/create-schedule";
import { Alert } from "react-native";
import { useAuth } from "../../contexts/auth";

export function useScheduleScreen() {
  const route = useRoute<any>();

  const { doctor_id, service_id } = route.params;

  const hours = generateHours();

  const [selectedHour, setSelectedHour] = useState("");

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const [loadingCreateSchedule, setLoadingCreateSchedule] = useState(false);

  const navigation = useNavigation();

  async function handleCreateSchedule() {
    try {
      setLoadingCreateSchedule(true);

      if (!selectedHour || !selectedDate)
        return Alert.alert("Erro", "Selecione uma data e hora");

      await createSchedule({
        date: selectedDate,
        doctor_id: Number(doctor_id),
        hour: selectedHour,
        service_id: Number(service_id),
      });

      // @ts-ignore
      navigation.navigate("Appointments", { updateData: true });
    } catch (error) {
      Alert.alert("Erro", "Tente novamente");
    } finally {
      setLoadingCreateSchedule(false);
    }
  }

  return {
    hours,
    selectedHour,
    setSelectedHour,
    selectedDate,
    setSelectedDate,
    handleCreateSchedule,
    loadingCreateSchedule,
  };
}
