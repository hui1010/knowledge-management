import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Posts({navigation, route}) {
    const {category} = route.params
    const [posts, setPosts] = useState([])
    const fetchData = () => {
        fetch(`https://knologram.app/wp-json/wp/v2/posts/?categories=${category}`)
        .then(response => response.json())
        .then(data => setPosts(data))

    }
    
    useEffect(()=>{fetchData()}, [])

    
    const matchedPosts = posts.filter(post => post.categories === category)
    const handleTextPress = (item) => {
        navigation.navigate("Post", item)
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
                keyExtractor={(item) => `${item.id}`}
                data={posts} 
                renderItem={({item}) =>(  
                    <TouchableOpacity onPress={()=>handleTextPress(item)}>
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


