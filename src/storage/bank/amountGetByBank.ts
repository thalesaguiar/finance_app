import AsyncStorage from "@react-native-async-storage/async-storage";
import { BANK_AMOUNT } from "@storage/storageConfig";

export async function amountGetByBank(bank: string) {
  try {
    const storage = await AsyncStorage.getItem(`${BANK_AMOUNT}-${bank}`);
    const amount = storage ? JSON.parse(storage) : [];
    return amount;
  } catch (error) {
    throw error;
  }
}
