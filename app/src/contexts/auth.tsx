import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { storage } from "../utils";
import { STORAGE_KEYS } from "../constants/storagekeys";
import { getUser } from "../http/get-user";
import { useNavigation } from "@react-navigation/native";

type User = {
  id: number;
  email: string;
  name: string;
};

interface IAuthContext {
  isAuthenticated: boolean;
  setUser: Dispatch<
    SetStateAction<{
      access_token: string;
      user: User;
    } | null>
  >;
  user: {
    access_token: string;
    user: User;
  } | null;
}
interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<{
    access_token: string;
    user: User;
  } | null>(null);
  const isAuthenticated = !!user;
  const navigation = useNavigation();

  useEffect(() => {
    async function getStoragedUser() {
      const data = await storage.getData(STORAGE_KEYS.token);

      const user = await getUser();

      if (user?.id && data?.user?.id === user?.id) {
        return setUser(data);
      }

      await storage.removeData(STORAGE_KEYS.token);
      setUser(null);
      navigation.navigate("login" as never);
    }

    getStoragedUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
