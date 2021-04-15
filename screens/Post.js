import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import * as WebBrowser from 'expo-web-browser'

export default function Post({route, navigation}) {

    const {title, date, link, author, excerpt, acf} = route.params
    
    const dateStr = date.replace("T", " ")
    const excerptContent = excerpt.rendered
    const excerptStr = excerptContent.trim().substring(3, excerptContent.length-5)

    const handlePress = () => {
        WebBrowser.openBrowserAsync(link)
    }

    const styles = StyleSheet.create({
        content: {
            padding: 20,
            flex: 1
        },
        title: {
            fontSize: 33,
            fontWeight: 'bold',
            textAlign: 'center',
            marginVertical: 10,
            color: "#1a1b1c"
        },
        author: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
        },
        excerpt: {
            color: "#595959",
            fontSize: 20,
            marginVertical: 10,
        },
        link: {
            marginVertical: 10,
            backgroundColor: "#172a3a",
            borderRadius: 5
        }
    })

    return (
        <View style={styles.content}>
            <View>
                <Text>{acf.our_field}</Text>
            </View>
            <Text style={styles.title}>{title.rendered}</Text>
            <View style={styles.author}>
                <Text>Author: {author}</Text>
                <Text>{dateStr}</Text>
            </View>
            <Text style={styles.excerpt}>{excerptStr}</Text>
            <View style={styles.link}>
               <Button title="Go to website" color="white" onPress={handlePress}/>
            </View>   
        </View>
    )  
}
