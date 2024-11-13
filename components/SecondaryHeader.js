import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import PrimaText from './PrimaText'
import arrow from '../assets/icons/arrow_left.png'
import deleteIcon from '../assets/icons/deleteIcon.png'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    img: {
        width: 28,
        height: 28
    }
})
const SecondaryHeader = ({ icon = deleteIcon, isMiddle = false, content = "5 Products", isRightIcon = true, navigation = null, rightFunc = null }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image source={arrow} style={styles.img} />
            </TouchableOpacity>
            {isMiddle && <View style={{ width: 'auto' }}>
                <PrimaText
                    fontSize={18}
                    fontWeight='medium'
                    color='#000'
                    content={content}
                />
            </View>}
            {isRightIcon ? <TouchableOpacity onPress={rightFunc}><Image source={icon} style={styles.img} /></TouchableOpacity> : <View></View>}
        </View>
    )
}

export default SecondaryHeader