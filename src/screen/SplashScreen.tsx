import { Image, StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';

interface SplashScreenProps {

}

const SplashScreen: FC<SplashScreenProps> = ({ }) => {
  return (
    <View style={styles.container}>
      <Image source={require('@/res/img/z.png')} style={styles.logo} />
      <Text style={styles.text}>Welcome to My App!</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    marginTop: 20,
  },
});
