import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";

export interface IButton {
  text: string;
  onPress: () => void;
  danger?: boolean;
  loading?: boolean;
}

export function Button({ text, onPress, danger, loading }: IButton) {
  function handlePress() {
    onPress();
  }

  const dangerStyle = danger ? [styles.danger] : [];

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, ...dangerStyle]}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
