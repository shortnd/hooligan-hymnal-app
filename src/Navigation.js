import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import Screens from './screens';
// import Home from './screens/Home';
import CustomDrawer from './components/CustomDrawer';
import NavigationOptions from './config/NavigationOptions';
import { Palette } from './config/Settings';
import i18n from "../i18n";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { props } from 'ramda';

const { width: deviceWidth } = Dimensions.get('window');

const DefaultStackConfig = {
  cardStyle: {
    backgroundColor: '#fafafa'
  }
};

const RootDrawer = createDrawerNavigator();
const HomeStackNavigator = createStackNavigator();

const HomeNavigation = () => (
  <HomeStackNavigator.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <HomeStackNavigator.Screen name="Home" component={Screens.Home} />
  </HomeStackNavigator.Navigator>
)

const SongbookNavigation = () => (
  <HomeStackNavigator.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <HomeStackNavigator.Screen name="Songbook" component={Screens.Songbook} />
  </HomeStackNavigator.Navigator>
)

const Drawer = () => (
  <RootDrawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}>
    <RootDrawer.Screen name="Home" component={HomeNavigation} />
    <RootDrawer.Screen name="Songbook" component={SongbookNavigation} />
  </RootDrawer.Navigator>
)

export default function AppNavigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
