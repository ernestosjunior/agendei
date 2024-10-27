import React, { useState } from "react";
import { login } from "../../http/login";
import { Alert } from "react-native";
import { storage } from "../../utils";
import { STORAGE_KEYS } from "../../constants/storagekeys";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export function useLoginScreen() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const { setUser } = useAuth();
  const navigation = useNavigation();
  const [loadingLogin, setLoadingLogin] = useState(false);

  function handleForm(id: string, value: string) {
    setLoginForm((prev) => ({ ...prev, [id]: value }));
  }

  async function handleLogin() {
    try {
      setLoadingLogin(true);

      if (!loginForm.email || !loginForm.password) {
        return Alert.alert("Erro", "Preencha seu e-mail e senha");
      }

      const res = await login(loginForm);

      await storage.setData(STORAGE_KEYS.token, res);
      setUser(res);
      navigation.navigate("main" as never);
    } catch (error: any) {
      if (error?.message?.includes("status code 401")) {
        return Alert.alert("Erro", "Credenciais inválidas.");
      }
      Alert.alert("Erro", "Tente novamente!");
    } finally {
      setLoadingLogin(false);
    }
  }

  return {
    loginForm,
    handleForm,
    isLoadingLogin: loadingLogin,
    handleLogin,
    navigation,
  };
}
