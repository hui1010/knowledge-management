import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import Posts from './Posts'
import styles from '../styles/listStyle'

export default function Categories ({navigation}) {

    const [categories, setCategories] = useState([])
    const fetchData = async () => {
        await fetch(`https://www.knologram.app/wp-json/wp/v2/categories?posts`)
        .then(response => response.json())
        .then(data => {
            setCategories(data)    
        })    
    }

    useEffect(() => {fetchData()}, [])

    const handleTextPress = (item) => {
        navigation.navigate('Posts', {
            category: item.id
        })
    }

    return (
        <View>
            <FlatList 
                scrollIndicatorInsets={{right: 0}}
                keyExtractor={(item) => `${item.id}`}
                data={categories} 
                renderItem={({item}) =>(
                    <Pressable onPress={()=>handleTextPress(item)} style={({pressed}) => [{borderLeftWidth: pressed ? 10 : 0, borderLeftColor: pressed ? '#d9d9d9' : 'white'}, styles.post]}>
                        <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
                        <AntDesign style={styles.rightArrow} name="right" size={24} color="black" />
                    </Pressable>
                )}
            />      
        </View>
    )

    
}

