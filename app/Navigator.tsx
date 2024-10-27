import { Main, Services, Schedule, Login, Account } from "./src/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "./src/constants/theme";
import { ICONS } from "./src/constants/icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./src/contexts/auth";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const navigation = useNavigation();
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="account" component={Account} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen name="main" options={{ headerShown: false }}>
        {() => <Main />}
      </Stack.Screen>
      <Stack.Screen
        name="services"
        component={Services}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                color: COLORS.white,
              }}
            >
              Serviços
            </Text>
          ),
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: COLORS.blue }} />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ICONS.arrow} />
            </TouchableOpacity>
          ),
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="schedule"
        component={Schedule}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                color: COLORS.blue,
              }}
            >
              Fazer uma reserva
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={ICONS.arrowBlue} />
            </TouchableOpacity>
          ),
          headerBackVisible: false,
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
