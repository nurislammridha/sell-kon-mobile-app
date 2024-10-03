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
        height: 24,
        alignItems: 'center',
        width: 80,
        backgroundColor: "#FFF"
    },
    img: {
        width: 24,
        height: 24
    }
})
const PlusMinus = () => {
    return (
        <View style={styles.container}>
            <Image source={minus} style={styles.img} />
            <PrimaText
                fontSize={16}
                fontWeight='medium'
                content='1'
            />
            <Image source={plus} style={styles.img} />
        </View>
    )
}

export default PlusMinus