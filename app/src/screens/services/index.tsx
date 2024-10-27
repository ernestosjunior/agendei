import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { ICONS } from "../../constants/icons";
import { doctors_services } from "../../constants/mocks";
import { ServiceCard } from "../../components";
import { useRoute } from "@react-navigation/native";
import { useServicesScreen } from "./useServicesScreen";
import { COLORS } from "../../constants/theme";

export function Services() {
  const { services, loadingServices, fetchServices } = useServicesScreen();

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={services?.doctor?.icon === "F" ? ICONS.female : ICONS.male}
          style={styles.icon}
        />
        <Text style={styles.name}>
          {services?.doctor?.icon === "F" ? "Dra." : "Dr."}{" "}
          {services?.doctor?.name}
        </Text>
        <Text style={styles.specialty}>{services?.doctor?.specialty}</Text>
      </View>
      <FlatList
        refreshing={loadingServices}
        onRefresh={fetchServices}
        data={services.services}
        keyExtractor={(service) => String(service.id)}
        renderItem={({ item, index }) => (
          <ServiceCard
            index={index}
            length={services.services.length}
            description={item.description}
            id_service={item.id}
            price={item.price}
            doctor={services.doctor}
          />
        )}
      />
    </View>
  );
}
