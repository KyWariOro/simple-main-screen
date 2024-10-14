import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Screens/HomeScreen'
import ContactScreen from './Screens/ContactScreen'
import AboutScreen from './Screens/AboutScreen'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='原発'>
        <Drawer.Screen name='原発' component={HomeScreen}/>
        <Drawer.Screen name='詳細情報' component={AboutScreen}/>
        <Drawer.Screen name='接触' component={ContactScreen}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
