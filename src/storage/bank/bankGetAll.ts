import AsyncStorage from "@react-native-async-storage/async-storage";
import { BANK_COLECTION } from "../storageConfig";

export async function banksGetAll() {
  try {
    const storage = await AsyncStorage.getItem(BANK_COLECTION);

    const banks: string[] = storage ? JSON.parse(storage) : [];

    return banks;
  } catch (error) {
    throw error;
  }
}
