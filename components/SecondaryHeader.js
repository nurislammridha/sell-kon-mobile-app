import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import arrow from '../assets/icons/arrow_left.png'
import deleteIcon from '../assets/icons/deleteIcon.png'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,
        paddingBottom: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    img: {
        width: 20,
        height: 20
    }
})
const SecondaryHeader = ({ icon = deleteIcon, isMiddle = false }) => {
    return (
        <View style={styles.container}>
            <Image source={arrow} style={styles.img} />
            {isMiddle && <View style={{ width: 'auto' }}>
                <PrimaText
                    fontSize={18}
                    fontWeight='medium'
                    color='#000'
                    content='5 Products'
                />
            </View>}
            <Image source={icon} style={styles.img} />
        </View>
    )
}

export default SecondaryHeader