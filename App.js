import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SafeAreaView, TouchableWithoutFeedback, ScrollView, Pressable} from 'react-native';
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
      
      <NavigationContainer >
        <View style={styles.content}>
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
      </View>   
      </NavigationContainer>
      <View style={styles.bottom}></View>
   
    <SafeAreaView style={styles.navigates}>
      <TouchableWithoutFeedback onPress={handlePressCategory} hitSlop={{top: 0, bottom: 50, left: 50, right: 50}}>
        <View>
          <MaterialCommunityIcons name="view-module-outline" size={23} color={categoryView? "black" : "grey"}/>
        </View> 
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={handlePressPage} hitSlop={{top: 0, bottom: 50, left: 50, right: 50}}>
        <View>
          <Ionicons name="md-bookmarks-outline" size={23} color={pageView? "black" : "grey"}/>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback hitSlop={{top: 0, bottom: 50, left: 50, right: 50}}>
        <View>
          <FontAwesome5 name="heart" size={23} color="grey"/>
        </View>  
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback hitSlop={{top: 0, bottom: 50, left: 50, right: 50}}>
        <View>
          <Feather name="share" size={23} color="grey"/>
        </View>
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
    height: 70,
  },
  content: {
    height: '100%',
    paddingBottom: 70
  }, 
  navigate: {
    padding: 20
  }
});