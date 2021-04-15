import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import Posts from './Posts'

export default function Categories ({navigation}) {

    const [posts, setPosts] = useState([])
    const fetchData = async () => {
        await fetch("https://knologram.app/wp-json/wp/v2/posts/")
        .then(response => response.json())
        .then(data => {
            setPosts(data)    
        })    
    }

    
    useEffect(() => {fetchData()}, [])

    const allCategories = []
    posts.map(post=> allCategories.push(post.categories))
    
    const unique = new Set(allCategories.flat())
    
    const uniqueCategories = [...unique]


    const handleTextPress = (item) => {
        navigation.navigate('Posts', {
            category: item
        })
    }

    const styles = StyleSheet.create({
            post: {
                height: 100,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginVertical: 10,
                padding: 15,
                backgroundColor:"#172a3a",
            },
            title: {
                width: '80%',
                fontSize: 20,
                flexWrap: 'wrap',
                alignSelf: 'center',
                color: "white",
                flexShrink: 1,
            },
            rightArrow: {
                alignSelf: 'center',
                color: "white"
            }
    })
    return (
        <View>
            
            <FlatList 
                keyExtractor={(item) => `${item}`}
                data={uniqueCategories} 
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={()=>handleTextPress(item)}>
                        <View style={styles.post}>
                            <Text style={styles.title} numberOfLines={2}>Category {item}</Text>
                            <AntDesign style={styles.rightArrow} name="right" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                )}
            />
                
        </View>
    )

    
}

