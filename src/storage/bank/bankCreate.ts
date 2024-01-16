import { banksGetAll } from "@storage/bank/bankGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { BANK_COLECTION } from "@storage/storageConfig";

export async function bankCreate(newBank: string) {
  try {
    const storedBanks = await banksGetAll();

    const bankAlreadyExists = storedBanks.includes(newBank);

    if (bankAlreadyExists) {
      throw new Error("Usuário tentou adicionar uma conta que já existe");
    }
    const storage = JSON.stringify([...storedBanks, newBank]);
    await AsyncStorage.setItem(BANK_COLECTION, storage); //chave e valor
  } catch (error) {
    throw error;
  }
}
