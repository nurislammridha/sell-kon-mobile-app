import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

const SlideItem = ({ item, width, height, isDescriptionPage }) => {
    // console.log('isDescriptionPage', isDescriptionPage)
    // console.log('item?.url', item?.url)
    return (
        <View style={isDescriptionPage ? { ...styles.desContainer, width } : { ...styles.container, width }}>
            <Image
                source={isDescriptionPage ? { uri: item?.url } : item.img}
                resizeMethod='contain'
                // style={isDescriptionPage ? { ...styles.desImg, height } : { ...styles.img, height }}
                style={isDescriptionPage ? { width: "100%", height } : { ...styles.img, height }}
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
        // padding: 16,
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
