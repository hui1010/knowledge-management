import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { MaterialCommunityIcons, Ionicons, FontAwesome5, Feather } from '@expo/vector-icons'

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
    <View style={styles.container}>
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
    <SafeAreaView style={styles.navigates}>
      <TouchableWithoutFeedback onPress={handlePressCategory}>
        <MaterialCommunityIcons name="view-module-outline" size={20} color={categoryView? "black" : "grey"} />
      </TouchableWithoutFeedback> 
      <TouchableWithoutFeedback onPress={handlePressPage}>
        <Ionicons name="md-bookmarks-outline" size={20} color={pageView? "black" : "grey"} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback >
        <FontAwesome5 name="heart" size={20} color="grey" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback >
        <Feather name="share" size={20} color="grey" />
      </TouchableWithoutFeedback>
    </SafeAreaView>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigates: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',  
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#eee',
    height: 70
  },
});
