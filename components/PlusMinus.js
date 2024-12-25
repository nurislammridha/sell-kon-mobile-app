import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import pp from '../assets/icons/pp.png'
import minus from '../assets/icons/mm.png'
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
const PlusMinus = ({ width = 80, height = 24, btnWidth = 24, btnHeight = 24, handleMinus, handlePlus, quantity }) => {
    return (
        <View style={[styles.container, { width, height }]}>
            <TouchableOpacity onPress={() => handleMinus()}><Image source={minus} style={{ width: btnWidth, height: btnHeight, backgroundColor: '#ddd' }} /></TouchableOpacity>
            <PrimaText
                fontSize={16}
                fontWeight='medium'
                content={quantity}
            />
            <TouchableOpacity onPress={() => handlePlus()}><Image source={pp} style={{ width: btnWidth, height: btnHeight, backgroundColor: '#ddd' }} /></TouchableOpacity>

        </View>
    )
}

export default PlusMinus