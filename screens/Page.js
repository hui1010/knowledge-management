import React, {useState, useEffect} from 'react'
import {View, Text, Button, ScrollView} from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import styles from '../styles/contentStyle'

export default function Page({route, navigation}) {

    const {title, date, link, author, excerpt} = route.params
    
    const dateStr = date.replace("T", " ")
    const excerptContent = excerpt.rendered
    const excerptStr = excerptContent.trim().substring(3, excerptContent.length-5)

    const [authorName, setAuthorName] = useState('')
    const fetchAuthorName = () => {
        fetch(`https://www.knologram.app/wp-json/wp/v2/users/${author}`)
        .then(res => res.json())
        .then(data => {
            setAuthorName(data.name)
        })
    }

    useEffect(()=>{fetchAuthorName()}, [])

    const handlePress = () => {
        WebBrowser.openBrowserAsync(link)
    }

    return (
        <View style={styles.content}>
            <ScrollView>
                <Text style={styles.title}>{title.rendered}</Text>
                <Text style={styles.excerpt}>{excerptStr}</Text>  
            </ScrollView>
        </View>
    )  
}
