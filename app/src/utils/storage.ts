import AsyncStorage from "@react-native-async-storage/async-storage";

async function setData(key: string, value: Record<any, any>) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(JSON.stringify(e));
  }
}

async function getData(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : value;
  } catch (e) {
    console.error(JSON.stringify(e));
  }
}

async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(JSON.stringify(e));
  }
}

export const storage = { setData, getData, removeData };
