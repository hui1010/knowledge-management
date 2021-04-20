import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import YoutubePlayer from 'react-native-youtube-iframe'

import styles from '../styles/contentStyle'

export default function Post({route, navigation}) {

    const {title, date, link, author, excerpt, acf, content} = route.params
    
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

    const description = content.rendered.trim()
    // const part1 = description.substring(3, description.indexOf("</p>"))
    // const part2 = description.substring(description.indexOf("</p>")+8, description.indexOf("&#"))
    // const combinedDescription = part1.concat(part2).concat(`...`)
    
    // const buttonLink = description.substring(description.indexOf("<a href=") + 9, description.indexOf('">'))
    const descriptionText = description?.substring(description.indexOf(">") + 1, description.lastIndexOf("<"))
    
    const videoLink = acf.our_video?.trim()
    const videoSrc = videoLink?.substring(videoLink.indexOf("src") + 5, videoLink.indexOf(" frameborder"))
    const youtubeId = videoSrc?.substring(videoSrc.lastIndexOf("/"))
   
    useEffect(()=>{fetchAuthorName()}, [])

    const handlePress = () => {
        WebBrowser.openBrowserAsync(link)
    }

    return (
        <View style={styles.content}>
            <ScrollView>
                <View>
                    <Text>{acf.our_field}</Text>
                </View> 
                <View>
                    <YoutubePlayer height={300} play={false} videoId={youtubeId}/>
                </View> 
                <Text style={styles.title}>{title.rendered}</Text>
                <View style={styles.author}>
                    <Text>Author: {authorName}</Text>
                    <Text>{dateStr}</Text>
                </View>
                <Text style={styles.excerpt}>{descriptionText}</Text>
                <View style={styles.link}>
                <Button title="Go to website" color="white" onPress={handlePress}/>
                </View>  
            </ScrollView>
        </View>
    )  
}
