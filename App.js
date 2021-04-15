import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Posts from './screens/Posts'
import Post from './screens/Post'
import Categories from './screens/Categories'

const Stack = createStackNavigator()

export default function App() {

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories" >
        <Stack.Screen name="Categories" component={Categories} options={{title: 'Categories'}}/>
        <Stack.Screen name="Posts" component={Posts} options={{title: 'Posts'}}/>
        <Stack.Screen name="Post" component={Post} options={{title: 'Post'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
