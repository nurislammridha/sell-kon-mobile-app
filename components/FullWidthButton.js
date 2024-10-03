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
const FullWidthButton = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Please Order</Text>
        </View>
    )
}

export default FullWidthButton