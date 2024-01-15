import AsyncStorage from '@react-native-async-storage/async-storage';
import { BANK_AMOUNT } from '@storage/storageConfig';

export async function bankAmountSet( newAmount: string, bank: string) {
  try {
    await AsyncStorage.setItem(`${BANK_AMOUNT}-${bank}`, newAmount);

  }catch (error) {
    throw(error);
  }
}