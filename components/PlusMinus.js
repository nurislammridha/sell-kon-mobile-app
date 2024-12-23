import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import user from '../assets/icons/plus.png'
import minus from '../assets/icons/bKash.png'
import PrimaText from './PrimaText'
import usr from '../assets/icons/google.png'
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#FFF",
        // backgroundColor: "#F00"
    }
})
const PlusMinus = ({ width = 80, height = 24, btnWidth = 24, btnHeight = 24 }) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <Image source={usr} style={{ width: btnWidth, height: btnHeight }} />
            <PrimaText
                fontSize={16}
                fontWeight='medium'
                content='1'
            />
            <Image source={usr} style={{ width: btnWidth, height: btnHeight }} />
        </View>
    )
}

export default PlusMinus