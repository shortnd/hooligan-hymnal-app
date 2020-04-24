import React from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Layout } from '../constants';

const MenuButton = () => {

  const navigation = useNavigation();

  return (
    <BorderlessButton
      style={{
        marginRight: 5,
        marginLeft: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      hitSlop={{
        left: 30,
        top: 30,
        right: 30,
        bottom: 30
      }}
      onPress={() => {
        navigation.toggleDrawer()
      }}
    >
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
        size={28}
        color="#fff"
        />
    </BorderlessButton>
  )
}

export default MenuButton
