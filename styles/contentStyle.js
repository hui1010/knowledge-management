import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    content: {
        padding: 20,
        flex: 1
    },
    title: {
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: "#172a3a"
    },
    paragraph: {
        marginVertical: 10
    },
    block :{
        backgroundColor:"white",
        shadowColor: "#d9d9d9",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
        marginVertical: 5,
        padding: 25
    },
    video: {
        marginVertical: 10
    }, 
    divider: {
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 2,
    }
})