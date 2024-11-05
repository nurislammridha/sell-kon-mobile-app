import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
const FullWidthButton = ({ content = "Please Order", marginTop = 0, navigation = null, url = "" }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(url)}
        >
            <View style={[styles.container, { marginTop }]}>
                <Text style={styles.txt}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FullWidthButton