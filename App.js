import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Posts from './screens/Posts'
import Post from './screens/Post'
import Categories from './screens/Categories'
import Pages from './screens/Pages'
import Page from './screens/Page'

const Stack = createStackNavigator()

export default function App() {

  const [categoryView, setCategoryView] = useState(true)
  const [pageView, setPageView] = useState(false)

  const handlePressCategory = () => {
    setCategoryView(true)
    setPageView(false)
  }
  const handlePressPage = () => {
    setCategoryView(false)
    setPageView(true)
  }

  return (
    <>
    <NavigationContainer>
      { categoryView && !pageView ? 
        <Stack.Navigator initialRouteName="Categories" >
        <Stack.Screen name="Categories" component={Categories} options={{title: 'Categories'}}/>
        <Stack.Screen name="Posts" component={Posts} options={{title: 'Posts'}}/>
        <Stack.Screen name="Post" component={Post} options={{title: 'Post'}}/>
      </Stack.Navigator>
      :
      <Stack.Navigator initialRouteName="Pages">
        <Stack.Screen name="Pages" component={Pages} options={{title: 'Pages'}}/>
        <Stack.Screen name="Page" component={Page} options={{title: 'Page'}}/>
      </Stack.Navigator>
      }
      
    </NavigationContainer>
    <TouchableHighlight onPress={handlePressCategory}>
      <Text>Category List</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={handlePressPage}>
      <Text>Page List</Text>
    </TouchableHighlight>
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
