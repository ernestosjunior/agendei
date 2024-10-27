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
import { useAccountScreen } from "./useAccountScreen";

export function Account() {
  const insets = useSafeAreaInsets();
  const {
    handleAccount,
    handleForm,
    isLoadingAccount,
    accountForm,
    navigation,
  } = useAccountScreen();

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
        enabled
      >
        <View style={styles.containerInput}>
          <Input
            placeholder="Nome"
            value={accountForm.name}
            onChange={(value) => handleForm("name", value)}
            autoCapitalize="words"
          />
        </View>
        <View style={styles.containerInput}>
          <Input
            placeholder="E-mail"
            value={accountForm.email}
            onChange={(value) => handleForm("email", value)}
          />
        </View>
        <View style={styles.containerInput}>
          <Input
            placeholder="Senha"
            secureTextEntry
            value={accountForm.password}
            onChange={(value) => handleForm("password", value)}
          />
        </View>
        <Button
          loading={isLoadingAccount}
          text="Criar conta"
          onPress={handleAccount}
        />
      </KeyboardAvoidingView>

      <View style={styles.footer}>
        <Text>Já tenho conta. </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Fazer login.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
