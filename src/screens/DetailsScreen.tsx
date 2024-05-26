import { StyleSheet, Text, View, Button } from 'react-native';
import { FC } from 'react';

interface DetailScreenProps {
  navigation: any;
}

const DetailScreen: FC<DetailScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Nothing is here</Text>
      <Button onPress={() => navigation.navigate('Home')} title='Back to Home'></Button>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});