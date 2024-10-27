import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigator from "./Navigator";
import { AuthProvider } from "./src/contexts/auth";
import { COLORS } from "./src/constants/theme";

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.blue,
    background: COLORS.white,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={NavigationTheme}>
        <AuthProvider>
          <Navigator />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
