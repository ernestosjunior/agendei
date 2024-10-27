import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeTab, AppointmentsTab, ProfileTab } from "../../tabs";
import { Image, Text } from "react-native";
import { ICONS } from "../../constants/icons";
import { styles } from "./styles";

const Tab = createBottomTabNavigator();

export function Main() {
  const baseOptions = {
    headerTitleAlign: "center",
    tabBarShowLabel: false,
  } as BottomTabNavigationOptions;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          ...baseOptions,
          headerTitle: () => (
            <Image source={ICONS.logo} style={styles.tabHeaderLogo} />
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.home}
              style={[styles.tabIcon, focused && styles.tabIconFocused]}
            />
          ),
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={AppointmentsTab}
        options={{
          headerShadowVisible: false,
          ...baseOptions,
          headerTitle: () => (
            <Text style={styles.tabHeaderTitle}>Minhas Reservas</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.calendar}
              style={[styles.tabIcon, focused && styles.tabIconFocused]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          ...baseOptions,
          headerTitle: () => (
            <Text style={styles.tabHeaderTitle}>Meu Perfil</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.profile}
              style={[styles.tabIcon, focused && styles.tabIconFocused]}
            />
          ),
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}
