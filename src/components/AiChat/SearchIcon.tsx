import { Keyboard, Pressable, StyleSheet, TextInput } from 'react-native';
import { FC, useState, } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SearchIconProps {
  textInputRef: React.RefObject<TextInput>;
}

const SearchIcon: FC<SearchIconProps> = ({ textInputRef }) => {
  const [isShow, setIsShow] = useState(false);

  Keyboard.addListener('keyboardDidHide', () => {
    setIsShow(false);
  });

  Keyboard.addListener('keyboardDidShow', () => {
    setIsShow(true);
  });

  const handlePress = () => {
    if (Keyboard.isVisible()) {
      blurTextInput();
    } else {
      focusTextInput();
    }
  };

  const focusTextInput = () => {
    if (textInputRef.current?.isFocused()) {
      textInputRef.current?.blur();
    }
    textInputRef.current?.focus();
  };

  const blurTextInput = () => {
    if (textInputRef.current?.isFocused()) {
      Keyboard.dismiss();
    }
  };
  return (
    <Pressable style={styles.searchIcon} onPress={handlePress}>
      {
        isShow ? <AntDesign name="close" size={20} color="#4F8EF7" />
          : <AntDesign name="search1" size={20} color="#4F8EF7" />
      }
    </Pressable>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  searchIcon: {
    backgroundColor: 'transparent',
    borderRadius: 50, // 圆形
    aspectRatio: 1, // 宽高比
    height: '50%', // 高度
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
  },
});
