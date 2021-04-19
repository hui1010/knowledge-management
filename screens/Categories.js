import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
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
                keyExtractor={(item) => `${item.id}`}
                data={categories} 
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={()=>handleTextPress(item)}>
                        <View style={styles.post}>
                            <Text style={styles.title} numberOfLines={2}>{item.name}</Text>
                            <AntDesign style={styles.rightArrow} name="right" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                )}
            />
                
        </View>
    )

    
}

