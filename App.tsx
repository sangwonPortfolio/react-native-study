/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import BottomTabScreen from './src/screens/BottomTabScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'BottomTabScreen'}>
        <Stack.Screen
          name={'Login'}
          component={LoginScreen}
          options={{
            headerShown: false, // Header 노출여부
            title: '로그인', // Header title 이름
            // Header 블록에 대한 스타일
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            // Header의 텍스트, 버튼 색상
            headerTintColor: '#ffffff',
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name={'BottomTabScreen'}
          component={BottomTabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Detail'}
          component={DetailScreen}
          options={{
            title: '',
          }}
        />
        {/*<Stack.Screen name={'message'} component={}*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
