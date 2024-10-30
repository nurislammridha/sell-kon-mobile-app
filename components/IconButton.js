import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import icn from '../assets/icons/google.png'
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#959595",
        borderRadius: 5
    }
})
const IconButton = ({ width = 200, height = 56, imgWidth = 24, imgHeight = 24, icon = { icn }, isText = false, backgroundColor = "#FFF", content = "Tstx", marginTop = 0 }) => {
    return (
        <View style={{ ...styles.container, width, height, backgroundColor, marginTop }}>
            <Image source={icon} style={{ width: imgWidth, height: imgHeight, marginRight: 2 }} />
            {isText && <PrimaText content={content} fontSize={16} color='#000' />}
        </View>
    )
}

export default IconButton