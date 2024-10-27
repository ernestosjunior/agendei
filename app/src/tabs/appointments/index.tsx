import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { AppointmentCard } from "../../components";
import { useAppointmentsTab } from "./useAppointmentsTab";

export function AppointmentsTab() {
  const {
    appointments,
    fetchAppointments,
    isLoading,
    handleCancelAppointment,
  } = useAppointmentsTab();

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={isLoading}
        onRefresh={fetchAppointments}
        data={appointments}
        keyExtractor={(appointment) => String(appointment.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <AppointmentCard
            index={index}
            id={item.id}
            length={appointments.length}
            booking_date={item.date}
            booking_hour={item.hour}
            doctor={item.doctor.name}
            service={item.service.description}
            specialty={item.doctor.specialty}
            handleCancelAppointment={handleCancelAppointment}
          />
        )}
      />
    </View>
  );
}
