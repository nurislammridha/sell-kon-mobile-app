import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: 45,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    txt: {
        color: '#FFF',
        fontSize: 16
    }
})
const FullWidthButton = ({ content = "Please Order", marginTop = 0 }) => {
    return (
        <View style={[styles.container, { marginTop }]}>
            <Text style={styles.txt}>{content}</Text>
        </View>
    )
}

export default FullWidthButton