import AsyncStorage from '@react-native-async-storage/async-storage';

import { BANK_COLECTION } from '@storage/storageConfig';

import {banksGetAll} from './bankGetAll';

export async function bankRemoveByName(bankDeleted: string) {
  try {
    const storedBanks = await banksGetAll();
    const banks = storedBanks.filter(bank => bank !== bankDeleted);

    await AsyncStorage.setItem(BANK_COLECTION, JSON.stringify(banks));

  } catch (error) {
    throw error;
  }
}