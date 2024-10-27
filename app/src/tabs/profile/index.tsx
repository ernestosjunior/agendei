import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { ProfileCard } from "../../components";
import React from "react";
import { useAuth } from "../../contexts/auth";

export function ProfileTab() {
  const data = [
    { label: "Nome", text: "Ernesto Júnior", state: "name" },
    { label: "E-mail", text: "ernesto.sjunior@hotmail.com", state: "email" },
  ];

  const { user } = useAuth();

  const userData = user?.user;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(data) => data.label}
        renderItem={({ item, index }) => (
          <ProfileCard
            index={index}
            length={data.length}
            label={item.label}
            text={userData ? userData[item.state as keyof typeof userData] : ""}
          />
        )}
      />
    </View>
  );
}
