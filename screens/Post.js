import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import YoutubePlayer from 'react-native-youtube-iframe'
import { WebView } from 'react-native-webview'

import styles from '../styles/contentStyle'
import { TouchableHighlight } from 'react-native-gesture-handler'

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
    const descriptionArr = description.split("</p>")
    const descriptionContent = descriptionArr.map(str=> str.trim().substring(3))
    
    const videoLink = acf.our_video?.trim()
    const videoSrc = videoLink?.substring(videoLink.indexOf("src") + 5, videoLink.indexOf(" frameborder")-1)
    const youtubeId = videoSrc?.substring(videoSrc.lastIndexOf("/"))

    const script = acf.our_script?.trim().replace(/['"]+/g, '')

    const includes = acf.our_includes?.trim().replace(/['"]+/g, '')

    const version = acf.our_version?.trim().replace(/['"]+/g, '')

    const tags = acf.our_tags?.trim().replace(/['"]+/g, '')
    console.log(tags)

   
    useEffect(()=>{fetchAuthorName()}, [])

    const handlePress = () => {
        WebBrowser.openBrowserAsync(link)
    
    }

    return (
        <ScrollView scrollIndicatorInsets={{right: 0}}>
            <View style={styles.content}>
                <View style={styles.block}>
                    <Text style={styles.title}>{title.rendered}</Text>
                </View>
                <View style={styles.video}>
                    <WebView 
                        style={{height: 188}}
                        source={{ uri: videoSrc }}
                        scrollEnabled={false}
                    />
                </View> 
                <View style={styles.block}>
                    <Text style={styles.paragraph}>{script}</Text>
                    <View style={styles.divider}/>
                    <Text style={styles.paragraph}>{includes}</Text>
                    <View style={styles.divider}/>
                    <Text style={styles.paragraph}>{version}</Text>
                    <View style={styles.divider}/>
                    <Text style={styles.paragraph}>{tags}</Text> 
                </View>                
            </View>
        </ScrollView>
    )  
}
