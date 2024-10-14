import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
const { width, height } = Dimensions.get('screen')
const SlideItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <Image
                source={item.img}
                resizeMethod='contain'
                style={styles.img}
            />
        </View>
    )
}
export default SlideItem
const styles = StyleSheet.create({
    container: {
        width,
        padding: 16
    },
    img: {
        width: "100%",
        height: 115,
        borderRadius: 10
    }
})
