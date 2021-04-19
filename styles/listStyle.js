import {StyleSheet} from 'react-native'
export default StyleSheet.create({
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