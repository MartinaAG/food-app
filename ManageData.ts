import AsyncStorage from '@react-native-async-storage/async-storage';

// https://www.javatpoint.com/react-native-asyncstorage

export async function storeStringData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
}

export async function storeObjectData(key: string, value: object) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
}

export async function getStringData(key: string): Promise<string> {
  let value: string = '';
  try {
    value = (await AsyncStorage.getItem(key)) || '';
  } catch (e) {
    console.log(e);
  }
  return value;
}

export async function getObjectData(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
}

export async function removeItemValue(key: string) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    console.log(exception);
    return false;
  }
}

export async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }

  console.log('Done.');
}

export async function fetchAllItems() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);

    return items;
  } catch (e) {
    console.log(e);
  }
}
