import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const styles = StyleSheet.create({
  tabIcon: { width: 25, height: 25, opacity: 0.3 },
  tabIconFocused: {
    opacity: 1,
  },
  tabHeaderTitle: {
    color: COLORS.blue,
    fontWeight: "600",
    fontSize: 20,
  },
  tabHeaderLogo: {
    width: 125,
    height: 29,
  },
});
