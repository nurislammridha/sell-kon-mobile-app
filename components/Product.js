import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        // backgroundColor: "#F00",
        borderRadius: 10,
        borderWidth: 1,
        // borderColor: "#FAFAFA",
        borderColor: "#FAFAFA",
        // borderColor: "#F00",
        // width: 163,

        // padding: 10
    },
    proImgCon: {
        display: 'flex',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    proImg: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    txtCon: {
        marginTop: 8,
        height: 49,
        paddingLeft: 5,
        paddingRight: 5,
    },
    txt: {
        color: '#333333',
        fontSize: 12,
        lineHeight: 17
    },
    del: {
        marginTop: 14,
        fontSize: 13,
        color: "#878787",
        lineHeight: 15,
        textDecorationLine: 'line-through',
        paddingLeft: 5,
        paddingRight: 5,
    },
    price: {
        marginTop: 0,
        fontSize: 14,
        color: "#F54C54",
        lineHeight: 17,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    }
})
const Product = ({ marginTop = 0, width = 163, height = 249, marginRight = 0, imgWidth = 130, imgHeight = 130, navigation = null }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <View style={[styles.container, { marginTop, width, height, marginRight }]}>
                <View style={styles.proImgCon}>
                    <Image source={pro} style={[styles.proImg, { width: imgWidth, height: imgHeight, }]} />
                </View>
                <View style={styles.txtCon}>
                    <Text style={styles.txt}>
                        Lorem10 ispsum set amet csjkdf 100
                        Lorem10 ispsum set amet csjkdf 100
                    </Text>
                </View>
                <Text style={styles.del}>&#2547; 23,0000</Text>
                <Text style={styles.price}>&#2547; 32,30,000</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Product