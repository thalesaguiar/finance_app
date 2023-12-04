import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@screens/HomeScreen';
import { Login } from '@screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return(
    <Navigator screenOptions={{headerShown: false}} >
      <Screen
        name='Login'
        component={Login}
      />
      
      <Screen
        name='HomeScreen'
        component={HomeScreen}
      />

    </Navigator>
  )
} 