import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoredData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    throw error;
  };
};

export const getStoredData = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    throw error;
  };
};

export const deleteStoredData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw error;
  };
};