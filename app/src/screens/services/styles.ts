import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  banner: {
    backgroundColor: COLORS.blue,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 36,
  },
  icon: {
    width: 81,
    height: 81,
  },
  name: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: FONT_SIZE.md,
    marginTop: 5,
  },
  specialty: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
    marginTop: 3,
  },
});
