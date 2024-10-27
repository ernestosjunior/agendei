import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: COLORS.gray4,
    paddingTop: 23,
    paddingBottom: 14,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstCard: {
    borderTopWidth: 1,
  },
  lastCard: {
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: "column",
    gap: 2,
  },
  description: {
    color: COLORS.gray3,
    fontSize: FONT_SIZE.lg,
  },
  price: {
    color: COLORS.blue,
    fontSize: FONT_SIZE.sm,
  },
});
