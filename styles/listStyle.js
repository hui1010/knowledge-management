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
        shadowColor: "#666",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1
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