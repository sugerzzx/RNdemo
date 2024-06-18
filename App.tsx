import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSCreen from "@screens/HomeScreen";
import DetailsScreen from '@screens/DetailsScreen';
import VideoScreen from '@screens/VideoScreen';
import SplashScreen from 'react-native-splash-screen';
import AiChat from '@screens/AiChat';

interface Props { }

const Stack = createNativeStackNavigator();

const App: FC<Props> = () => {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeSCreen} options={{ title: 'Home' }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{ title: 'Details Title' }} />
        <Stack.Screen name='Video' component={VideoScreen} options={{ title: 'Video Title' }} />
        <Stack.Screen name='AiChat' component={AiChat} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

