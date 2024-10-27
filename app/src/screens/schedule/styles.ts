import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
  },
  calendarContainer: {
    padding: 20,
  },
  hourContainer: {
    flexDirection: "column",
    borderTopWidth: 1,
    borderTopColor: COLORS.gray3,
    paddingHorizontal: 20,
    paddingTop: 39,
  },
  label: {
    fontSize: FONT_SIZE.lg,
    fontWeight: "500",
    color: COLORS.gray2,
  },
  footer: {
    paddingHorizontal: 26,
    paddingBottom: 32,
  },
});

export const theme = {
  todayTextColor: COLORS.red,
  selectedDayBackgroundColor: COLORS.blue,
  selectedDayTextColor: COLORS.white,
  arrowColor: COLORS.blue,
};
