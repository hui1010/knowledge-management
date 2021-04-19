import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
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
                keyExtractor={(item) => `${item.id}`}
                data={posts} 
                renderItem={({item}) =>(  
                    <TouchableOpacity onPress={()=>handlePress(item)}>
                        <View style={styles.post}>
                            <Text style={styles.title} numberOfLines={2}> {item.title.rendered}</Text>
                            <AntDesign style={styles.rightArrow} name="right" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    
                )}
            /> 
        </View>
    )
}


