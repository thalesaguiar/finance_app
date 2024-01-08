import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SiginScreen } from "@screens/SiginScreen";
import { HomeScreen } from "@screens/HomeScreen";
import { Login } from "@screens/Login/Login";
import { CreateAcount } from "@screens/CreateAcountScreen";
import { BankList } from "@screens/AcountLists/";
import { BanksAddModal } from "@screens/AddBanks";
import { EditBanks } from "@screens/EditBanksScreen";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />

      <Screen name="SigIn" component={SiginScreen} />

      <Screen name="CreateAcount" component={CreateAcount} />

      <Screen name="HomeScreen" component={HomeScreen} />

      <Screen name="AcountLists" component={BankList} />

      <Screen name="AddBanks" component={BanksAddModal} />

      <Screen name="EditBanks" component={EditBanks} />
    </Navigator>
  );
}
