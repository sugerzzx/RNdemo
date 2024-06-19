import { Button, DrawerLayoutAndroid, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FC } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SideBarProps {
  drawer: React.RefObject<DrawerLayoutAndroid>;
}

const SideBar: FC<SideBarProps> = ({ drawer }) => {
  return (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.searchArea}>
        <Pressable style={styles.searchIcon}>
          <AntDesign name="search1" size={20} color="#4F8EF7" />
        </Pressable>
        <TextInput></TextInput>
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
  searchIcon: {
    backgroundColor: 'transparent',
    borderRadius: 50, // 圆形
    aspectRatio: 1, // 宽高比
    height: '50%', // 高度
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
  },
});