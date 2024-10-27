import { Text, View } from "react-native";
import { styles } from "./styles";

export interface IProfileCard {
  label: string;
  text: string | number;
  index: number;
  length: number;
}

export function ProfileCard({ label, text, index, length }: IProfileCard) {
  const isFirst = index === 0;
  const isLast = index === length - 1;

  return (
    <View
      style={[
        styles.card,
        isFirst && styles.firstCard,
        isLast && styles.lastCard,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
