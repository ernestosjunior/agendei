import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.gray4,
    marginVertical: 3,
    borderRadius: 6,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray1,
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginTop: 1,
  },
});
