import {
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Input } from "../../components";
import { styles } from "./styles";
import { ICONS } from "../../constants/icons";
import { useLoginScreen } from "./useLoginScreen";

export function Login() {
  const insets = useSafeAreaInsets();
  const { isLoadingLogin, handleLogin, loginForm, handleForm, navigation } =
    useLoginScreen();

  return (
    <View
      style={{
        ...styles.container,
        marginVertical: insets.top,
      }}
    >
      <View style={styles.containerLogo}>
        <Image source={ICONS.logo} style={styles.logo} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.containerInput}>
          <Input
            placeholder="E-mail"
            value={loginForm.email}
            onChange={(value) => handleForm("email", value)}
          />
        </View>
        <View style={styles.containerInput}>
          <Input
            placeholder="Senha"
            secureTextEntry
            value={loginForm.password}
            onChange={(value) => handleForm("password", value)}
          />
        </View>
        <Button loading={isLoadingLogin} text="Acessar" onPress={handleLogin} />
      </KeyboardAvoidingView>

      <View style={styles.footer}>
        <Text>Não tenho conta. </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("account" as never)}
        >
          <Text style={styles.footerLink}>Criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
