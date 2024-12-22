import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
})
const FullWidthButton = ({ content = "Please Order", marginTop = 0, marginBottom = 0, navigation = null, url = "", height = 45, fontSize = 16, onPress }) => {
    return (
        <TouchableOpacity
            // onPress={() => navigation.navigate(url)}
            onPress={onPress}
        >
            <View style={[styles.container, { marginTop, marginBottom, height }]}>
                <Text style={{ color: '#FFFFFF', fontSize }}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FullWidthButton