import 'react-native-gesture-handler'
import React from 'react';
import { NativeBaseProvider, Center } from "native-base"

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import WebViewScreen from './components/WebViewScreen';

const HomeStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <HomeStack.Navigator initialRouteName="Home">
          <HomeStack.Screen options={{ title: 'EDsearch' }} name="EDsearch" component={HomeScreen} />
          <HomeStack.Screen options={{ title: '' }} name="Busqueda" component={SearchScreen} />
          <HomeStack.Screen options={{ title: '' }} name="WebView" component={WebViewScreen} />
        </HomeStack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};



export default App;
