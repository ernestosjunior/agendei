import home from "../assets/images/home.png";
import calendar from "../assets/images/calendar.png";
import profile from "../assets/images/profile.png";
import logo from "../assets/images/logo.png";
import male from "../assets/images/male.png";
import female from "../assets/images/female.png";
import clock from "../assets/images/clock.png";
import arrow from "../assets/images/arrow.png";
import arrowBlue from "../assets/images/arrow_blue.png";
import { ImageSourcePropType } from "react-native";

const keys = {
  home,
  calendar,
  profile,
  logo,
  male,
  female,
  clock,
  arrow,
  arrowBlue,
};

const ICONS = keys as { [K in keyof typeof keys]: ImageSourcePropType };

export { ICONS };
