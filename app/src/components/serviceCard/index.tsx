import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../button";
import { ICONS } from "../../constants/icons";
import { numberToCurrency } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { GetDoctorServices } from "../../http/get-doctor-services";

export interface IServiceCard {
  id_service: number;
  description: string;
  price: number;
  index: number;
  length: number;
  doctor: GetDoctorServices["doctor"];
}

export function ServiceCard({
  id_service,
  description,
  price,
  index,
  length,
  doctor,
}: IServiceCard) {
  const isFirst = index === 0;
  const isLast = index === length - 1;
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.card,
        isFirst && styles.firstCard,
        isLast && styles.lastCard,
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{numberToCurrency(price)}</Text>
      </View>
      <Button
        text="Agendar"
        onPress={() =>
          // @ts-ignore
          navigation.navigate("schedule", {
            doctor_id: doctor.id,
            service_id: id_service,
          })
        }
      />
    </View>
  );
}
