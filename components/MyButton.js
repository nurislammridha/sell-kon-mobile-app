import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
})
const MyButton = ({ width = 100, height = 50, content = "Content", backgroundColor = '#FFF', color = "#000", fontSize = 16, marginTop = 0, marginRight = 0, borderWidth = 0, borderColor = "#FFF", navigation = null, url = "", onPress }) => {

    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            <View style={{ ...styles.container, width, height, backgroundColor, marginTop, marginRight, borderWidth, borderColor }}>
                <Text style={{ color, fontSize }}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MyButton