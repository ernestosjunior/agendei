import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export interface IDoctorCard {
  name: string;
  specialty: string;
  icon: ImageSourcePropType;
  id: number;
}

export function DoctorCard({ name, specialty, icon, id }: IDoctorCard) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      // @ts-ignore
      onPress={() => navigation.navigate("services", { doctor_id: id })}
    >
      <Image source={icon} style={styles.icon} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>
    </TouchableOpacity>
  );
}
