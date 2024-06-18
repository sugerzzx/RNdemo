import { Button, DrawerLayoutAndroid, StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';

interface SideBarProps {
  drawer: React.RefObject<DrawerLayoutAndroid>;
}

const SideBar: FC<SideBarProps> = ({ drawer }) => {
  return (
    <>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});