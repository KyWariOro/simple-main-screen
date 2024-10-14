import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Screen/HomeScreen';
import AboutScreen from './Screen/AboutScreen';
import ContactScreen from './Screen/ContactScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='About' component={AboutScreen}/>
        <Drawer.Screen name='Contact' component={ContactScreen}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
