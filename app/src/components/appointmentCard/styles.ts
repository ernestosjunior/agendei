import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: COLORS.gray4,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  firstCard: {
    borderTopWidth: 1,
  },
  lastCard: {
    borderBottomWidth: 1,
  },
  header: {
    gap: 10,
  },
  doctor: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "700",
    color: COLORS.gray1,
  },
  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  top: {
    gap: 7,
  },
  date_hour: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  icon: {
    width: 28,
    height: 28,
  },
  text: {
    color: COLORS.gray3,
    fontSize: FONT_SIZE.sm,
  },
});
