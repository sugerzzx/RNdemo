import { Button, DrawerLayoutAndroid, StatusBar, StyleSheet, TextInput, View } from 'react-native';
import { FC, useRef } from 'react';
import SearchIcon from './SearchIcon';

interface SideBarProps {
  drawer: React.RefObject<DrawerLayoutAndroid>;
}

const SideBar: FC<SideBarProps> = ({ drawer }) => {
  const textInputRef = useRef<TextInput>(null);

  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.searchArea}>
        <SearchIcon textInputRef={textInputRef} />
        <TextInput ref={textInputRef} style={styles.textInupt} placeholder='搜索' placeholderTextColor='#777' cursorColor='#222' ></TextInput>
      </View>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  searchArea: {
    height: 50,
    backgroundColor: '#b4b4b479',
    marginHorizontal: 6,
    paddingHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInupt: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
  },
});