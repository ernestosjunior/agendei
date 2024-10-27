import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../button";
import { ICONS } from "../../constants/icons";

export interface IAppointmentCard {
  booking_date: string;
  booking_hour: string;
  service: string;
  doctor: string;
  specialty: string;
  index: number;
  length: number;
  handleCancelAppointment: (id: number) => void;
  id: number;
}

export function AppointmentCard({
  service,
  doctor,
  specialty,
  booking_date,
  booking_hour,
  index,
  length,
  id,
  handleCancelAppointment,
}: IAppointmentCard) {
  const isFirst = index === 0;
  const isLast = index === length - 1;

  return (
    <View
      style={[
        styles.card,
        isFirst && styles.firstCard,
        isLast && styles.lastCard,
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.doctor}>
          {service} - {doctor}
        </Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.top}>
          <View style={styles.date_hour}>
            <Image source={ICONS.calendar} style={styles.icon} />
            <Text style={styles.text}>
              {booking_date?.split("-")?.reverse()?.join("/")}
            </Text>
          </View>
          <View style={styles.date_hour}>
            <Image source={ICONS.clock} style={styles.icon} />
            <Text style={styles.text}>{booking_hour}</Text>
          </View>
        </View>
        <Button
          text="Cancelar reserva"
          onPress={() => handleCancelAppointment(id)}
          danger
        />
      </View>
    </View>
  );
}
