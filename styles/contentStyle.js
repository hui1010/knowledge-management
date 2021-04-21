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
    },
    paragraph: {
        marginBottom: 10
    }
})