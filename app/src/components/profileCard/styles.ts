import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: COLORS.gray4,
    paddingVertical: 26,
    paddingHorizontal: 16,
  },
  firstCard: {
    borderTopWidth: 1,
  },
  lastCard: {
    borderBottomWidth: 1,
  },
  label: {
    color: COLORS.gray3,
    fontSize: FONT_SIZE.sm,
  },
  text: {
    fontSize: FONT_SIZE.lg,
    marginTop: 6,
  },
});
