import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSCreen from "./src/screen/HomeScreen";
import DetailsScreen from './src/screen/DetailsScreen';
import SplashScreen from 'react-native-splash-screen';

interface Props { }

const Stack = createNativeStackNavigator();

const App: FC<Props> = () => {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeSCreen} options={{ title: 'Home' }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details Title' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

