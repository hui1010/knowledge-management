import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import Page from './Page'

export default function Posts({navigation, route}) {
    
    const handlePress = () => {
        navigation.navigate("Page")
    }

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
               <Text>Hello world</Text> 
            </TouchableOpacity>
            
        </View>
    )
}
