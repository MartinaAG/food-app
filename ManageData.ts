import AsyncStorage from '@react-native-async-storage/async-storage';

// https://www.javatpoint.com/react-native-asyncstorage

export async function storeStringData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
}

export async function storeObjectData(key: string, value: object) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
}

export async function getStringData(key: string): Promise<string> {
  let value: string = '';
  try {
    value = (await AsyncStorage.getItem(key)) || '';
  } catch (e) {
    // error reading value
  }
  return value;
}

export async function getObjectData(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}

export async function removeItemValue(key: string) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}

export async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
}
