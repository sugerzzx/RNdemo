import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { FC } from 'react';

interface HomeProps {
  navigation: any;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Home Screen</Text>

      <View style={styles.button}>
        <Button onPress={() => {
          navigation.navigate('Details');
        }} title='Go To Another Page' color={'#845EC2'} />
      </View>

      <View style={styles.button}>
        <Button onPress={() => {
          navigation.navigate('Video');
        }} title='Go To Video Page' color={'#845EC2'} />
      </View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBEAFF'
  },
  title: {
    fontSize: 40,
    color: '#845EC2'
  },
  button: {
    width: 200,
    marginTop: 20
  }
});
