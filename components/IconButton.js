import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import icon from '../assets/icons/google.png'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#959595",
        borderRadius: 5
    }
})
const IconButton = ({ width = 200, height = 56, imgWidth = 24, imgHeight = 24 }) => {
    return (
        <View style={{ ...styles.container, width, height }}>
            <Image source={icon} style={{ width: imgWidth, height: imgHeight, marginRight: 2 }} />
            <PrimaText fontSize={16} color='#000' />
        </View>
    )
}

export default IconButton