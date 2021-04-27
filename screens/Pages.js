import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, Pressable, ActivityIndicator} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import Page from './Page'
import styles from '../styles/listStyle'

export default function Pages({navigation, route}) {
    const [pages, setPages] = useState([])

    const fetchPages = () => {
        fetch(`https://knologram.app/wp-json/wp/v2/pages`)
        .then(response => response.json())
        .then(data => setPages(data))

    }
    
    useEffect(()=>{fetchPages()}, [])
    
    const handlePress = (item) => {
        navigation.navigate("Page", item)
    }

    return (
        <View>
            <FlatList 
                scrollIndicatorInsets={{right: 0}}
                keyExtractor={(item) => `${item.id}`}
                data={pages} 
                renderItem={({item}) =>(  
                    <Pressable onPress={()=>handlePress(item)} style={({pressed}) => [{borderLeftWidth: pressed ? 10 : 0, borderLeftColor: pressed ? '#d9d9d9' : 'white'}, styles.post]}>
                        <Text style={styles.title} numberOfLines={2}> {item.title.rendered}</Text>
                        <AntDesign style={styles.rightArrow} name="right" size={24} color="black" />                
                    </Pressable>
                    
                )}
            />        
        </View>
    )
}
