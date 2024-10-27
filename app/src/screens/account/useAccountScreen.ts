import { useState } from "react";
import { Alert } from "react-native";
import { storage } from "../../utils";
import { STORAGE_KEYS } from "../../constants/storagekeys";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { createAccount } from "../../http/create-account";

export function useAccountScreen() {
  const [accountForm, setAccountForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setUser } = useAuth();
  const navigation = useNavigation();
  const [loadingAccount, setLoadingAccount] = useState(false);

  function handleForm(id: string, value: string) {
    setAccountForm((prev) => ({ ...prev, [id]: value }));
  }

  async function handleAccount() {
    try {
      setLoadingAccount(true);

      if (!accountForm.email || !accountForm.password || !accountForm.name) {
        return Alert.alert("Erro", "Preencha todos os dados");
      }

      const res = await createAccount(accountForm);

      await storage.setData(STORAGE_KEYS.token, res);
      setUser(res);
      navigation.navigate("main" as never);
    } catch (error: any) {
      Alert.alert("Erro", "Tente novamente!");
    } finally {
      setLoadingAccount(false);
    }
  }

  return {
    accountForm,
    handleForm,
    isLoadingAccount: loadingAccount,
    handleAccount,
    navigation,
  };
}
