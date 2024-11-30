import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import theme from './theme';
import ToggleDarkMode from './ToggleDarkMode';

// Pantalla splash Animada
import SplashScreen from './src/components/SplashScreen';
// Pantalla de inicio
import BeaconScreen from './src/components/BeaconScreen';
// Pantallas Home que usaran tab navigator y tendran acceso el drawer
import ServicesScreen from './src/components/ServicesScreen';
import ActivitiesScreen from './src/components/ActivitiesScreen';
// Componentes dentro del drawer
import AccountScreen from './src/components/Drawer/AccountScreen';
import RoomScreen from './src/components/Drawer/RoomScreen';
import HostingScreen from './src/components/Drawer/HostingScreen';
import DevicesScreen from './src/components/Drawer/DevicesScreen';
import AccessCodeScreen from './src/components/AccessCodeScreen';
import { NativeBaseProvider, useColorMode, useColorModeValue } from 'native-base';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigatorHome = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Services') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        } else if (route.name === 'Activities') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Services" component={ServicesScreen} />
    <Tab.Screen name="Activities" component={ActivitiesScreen} />
  </Tab.Navigator>
);

const DrawerNavigatorApp = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabNavigatorHome} />
    <Drawer.Screen name="Account" component={AccountScreen} />
    <Drawer.Screen name="Room" component={RoomScreen} />
    <Drawer.Screen name="Hosting" component={HostingScreen} />
    <Drawer.Screen name="Devices" component={DevicesScreen} />
  </Drawer.Navigator>
);

const StackNavigatorApp = () => (
  <Stack.Navigator initialRouteName="Beacon">
    <Stack.Screen name="Beacon" component={BeaconScreen} />
    <Stack.Screen name="Access" component={AccessCodeScreen} />
    <Stack.Screen name="Main" component={DrawerNavigatorApp} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Ajusta el tiempo según la duración de tu animación de splash
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigatorApp />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

