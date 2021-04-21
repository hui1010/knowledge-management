import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, ScrollView, FlatList} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import YoutubePlayer from 'react-native-youtube-iframe'

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
    console.log(descriptionContent)
    
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
                <Text style={styles.title}>{title.rendered}</Text>
                <View>
                    <YoutubePlayer height={200} play={false} videoId={youtubeId}/>
                </View> 
                {/* <FlatList 
                    keyExtractor= {(item,index) => `${index}`}
                    data={descriptionContent}
                    renderItem={({item}) => {
                        <View >
                            <Text>{item}</Text>
                        </View>
                    }}
                /> */}
                {
                    descriptionContent.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text>{item}</Text>
                            </View>
                        )  
                    })
                }
                {/* <Text style={styles.excerpt}>{descriptionContent}</Text>     */}
            </ScrollView>
        </View>
    )  
}
