import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import styles from '../styles/listStyle'

export default function Posts({navigation, route}) {
    const {category} = route.params
    const [posts, setPosts] = useState([])
    const fetchPosts = () => {
        fetch(`https://knologram.app/wp-json/wp/v2/posts/?categories=${category}`)
        .then(response => response.json())
        .then(data => setPosts(data))

    }
    
    useEffect(()=>{fetchPosts()}, [])

    const handlePress = (item) => {
        navigation.navigate("Post", item)
    }


    return (
        <View>  
            <FlatList 
                scrollIndicatorInsets={{right: 0}}
                keyExtractor={(item) => `${item.id}`}
                data={posts} 
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


