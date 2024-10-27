import { TextInput } from "react-native";
import { styles } from "./styles";

export interface IInput {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  autoCapitalize?: "none" | "words";
  autoComplete?: "off";
}

export function Input({
  placeholder,
  secureTextEntry,
  onChange,
  value,
  autoCapitalize = "none",
  autoComplete = "off",
}: IInput) {
  return (
    <TextInput
      autoComplete={autoComplete}
      autoCapitalize={autoCapitalize}
      onChangeText={onChange}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
}
