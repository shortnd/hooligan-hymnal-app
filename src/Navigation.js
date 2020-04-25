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

const RosterNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Roster" component={Screens.Roster} />
    </HomeStackNavigator.Navigator>
  )
}

const EventsNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Events" component={Screens.Events} />
    </HomeStackNavigator.Navigator>
  )
}

const StandingNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Standings" component={Screens.Standings} />
    </HomeStackNavigator.Navigator>
  )
}

const ShopNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Shop" component={Screens.Shop} />
    </HomeStackNavigator.Navigator>
  )
}

const VolunteerNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Volunteer" component={Screens.Volunteer} />
    </HomeStackNavigator.Navigator>
  )
}

const InstrumentationNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="Instrumentation" component={Screens.Instrumentation} />
    </HomeStackNavigator.Navigator>
  )
}

const CapoNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="CapoLogin" component={Screens.CapoLogin} />
      <HomeStackNavigator.Screen name="CapoHome" component={Screens.CapoHome} />
      <HomeStackNavigator.Screen name="PostCreate" component={Screens.PostCreate} />
      <HomeStackNavigator.Screen name="PostPreview" component={Screens.PostPreview} />
    </HomeStackNavigator.Navigator>
  )
}

const AboutNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="About" component={Screens.About} />
    </HomeStackNavigator.Navigator>
  )
}

const YellowCardNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="RedCard" component={props => <Screens.RefereeCard color={Palette.YellowCard} />} />
    </HomeStackNavigator.Navigator>
  )
}

const RedCardNavigation = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen name="RedCard" component={props => <Screens.RefereeCard color={Palette.RedCard} />} />
    </HomeStackNavigator.Navigator>
  )
}

const Drawer = () => (
  <RootDrawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}>
    <RootDrawer.Screen name="Home" component={HomeNavigation} />
    <RootDrawer.Screen name="Songbook" component={SongbookNavigation} />
    <RootDrawer.Screen name="Roster" component={RosterNavigation} />
    <RootDrawer.Screen name="Events" component={EventsNavigation} />
    <RootDrawer.Screen name="Standings" component={StandingNavigation} />
    <RootDrawer.Screen name="Shop" component={ShopNavigation} />
    <RootDrawer.Screen name="Volunteer" component={VolunteerNavigation} />
    <RootDrawer.Screen name="Instrumentation" component={InstrumentationNavigation} />
    <RootDrawer.Screen name="CapoHome" component={CapoNavigation} />
    <RootDrawer.Screen name="About" component={AboutNavigation} />
    <RootDrawer.Screen name="YellowCard" component={YellowCardNavigation} />
    <RootDrawer.Screen name="RedCard" component={RedCardNavigation} />
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
