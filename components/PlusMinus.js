import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import plus from '../assets/icons/plus.png'
import minus from '../assets/icons/minus.png'
import PrimaText from './PrimaText'
const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#FFF"
    }
})
const PlusMinus = ({ width = 80, height = 24, btnWidth = 24, btnHeight = 24 }) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <Image source={minus} style={{ width: btnWidth, height: btnHeight }} />
            <PrimaText
                fontSize={16}
                fontWeight='medium'
                content='1'
            />
            <Image source={plus} style={{ width: btnWidth, height: btnHeight }} />
        </View>
    )
}

export default PlusMinus