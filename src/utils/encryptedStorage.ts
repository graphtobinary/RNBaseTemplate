import EncryptedStorage from 'react-native-encrypted-storage';

export const getStorageItem = async (keys: string) => {
  const dataItem = await EncryptedStorage.getItem(keys);
  return dataItem || null;
};

export const setStorageItem = async (keys: string, data: any) => {
  await EncryptedStorage.setItem(keys, JSON.stringify(data));
};

export const removeStorageItem = async (keys: string) => {
  await EncryptedStorage.removeItem(keys);
};

export const clearStorage = async () => {
  await EncryptedStorage.clear();
};
