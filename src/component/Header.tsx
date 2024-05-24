import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});