import React from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#FFF"

    },
    dotActive: {
        backgroundColor: "#FFF"
    }
})
const { width } = Dimensions.get("screen")
const Pagination = ({ data, scrollX, index, marginTop, isDescriptionPage }) => {
    return (
        <View style={{ ...styles.container, marginTop }}>
            {data.map((_, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp'
                })
                return <Animated.View
                    key={idx.toString()}
                    style={[styles.dot, { width: dotWidth, opacity },
                    isDescriptionPage && { backgroundColor: "#D9D9D9" },
                    idx === index && styles.dotActive, ,
                    idx === index && isDescriptionPage && { backgroundColor: "#000" }
                    ]}
                />
            })}
        </View>
    )
}

export default Pagination