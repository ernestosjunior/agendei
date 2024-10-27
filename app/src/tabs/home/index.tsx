import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { DoctorCard } from "../../components";
import { ICONS } from "../../constants/icons";
import { useHomeTab } from "./useHomeTab";
import { COLORS } from "../../constants/theme";

export function HomeTab() {
  const { doctors, loadingDoctors, fetchDoctors } = useHomeTab();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médicos</Text>
      <FlatList
        refreshing={loadingDoctors}
        onRefresh={fetchDoctors}
        data={doctors}
        keyExtractor={(doctor) => String(doctor.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <DoctorCard
            id={item.id}
            name={`${item?.icon === "F" ? "Dra." : "Dr."} ${item.name}`}
            specialty={item.specialty}
            icon={item.icon === "M" ? ICONS.male : ICONS.female}
          />
        )}
      />
    </View>
  );
}
