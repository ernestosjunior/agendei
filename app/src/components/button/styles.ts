import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue,
    borderRadius: 4,
    paddingHorizontal: 14,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
  danger: {
    backgroundColor: COLORS.red,
  },
});
