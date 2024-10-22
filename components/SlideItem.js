import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

const SlideItem = ({ item, width, height, isDescriptionPage }) => {

    return (
        <View style={isDescriptionPage ? { ...styles.desContainer, width } : { ...styles.container, width }}>
            <Image
                source={item.img}
                resizeMethod='contain'
                style={isDescriptionPage ? { ...styles.desImg, height } : { ...styles.img, height }}
            />
        </View>
    )
}
export default SlideItem
const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FFF",
    },
    desContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: "#FFF"
    },
    img: {
        width: "100%",
        borderRadius: 10
    },
    desImg: {
        width: 254,
        borderRadius: 10
    }
})
