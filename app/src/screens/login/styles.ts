import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 48,
    paddingTop: 48,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerLogo: {
    alignItems: "center",
  },
  logo: {
    width: 140,
    height: 30,
  },
  containerInput: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: COLORS.gray5,
    padding: 10,
    borderRadius: 6,
    height: 45,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  footerLink: {
    color: COLORS.blue,
  },
});
