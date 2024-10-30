import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import search from '../assets/icons/search.png'
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "#C9C9C9",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#FFF"
    },
    input: {
        borderWidth: 0,
        width: "auto",
        height: "100%",
        margin: 0,
        padding: 0,
        color: "#7C7C7C",
        fontSize: 16,

    },
    img: {
        width: 18,
        height: 18,
        marginRight: 10
    }
})
const PrimaInput = ({ leftIcon = false, width = 265, height = 45, placeholder = "Enter", backgroundColor = "#FFF", marginTop = 0, type }) => {
    return (
        <View style={{ ...styles.container, width, height, backgroundColor, marginTop }}>
            {leftIcon && <Image source={search} style={styles.img} />}
            <TextInput
                style={{ ...styles.input }}
                value=''
                placeholder={placeholder}
                keyboardType={type}
            />
        </View>
    )
}

export default PrimaInput