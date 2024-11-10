import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
import cart from '../assets/icons/shop_cart.png'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FAFAFA",
        // width: 163,
        height: 249,
        padding: 12
    },
    proImgCon: {
        display: 'flex',
        alignItems: 'center'
    },
    proImg: {
        width: 130,
        height: 130,
    },
    txtCon: {
        marginTop: 8,
        height: 35
    },
    txt: {
        color: '#878787',
        // color: '#333333',
        fontSize: 12
    },
    del: {
        fontSize: 10,
        color: "#878787",
        lineHeight: 18,
        textDecorationLine: 'line-through'
    },
    price: {
        fontSize: 12,
        color: "#F54C54",
        lineHeight: 18
    },
    bot: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cart: {
        width: 33,
        height: 33
    }
})
const ProductCart = ({ marginTop = 0, width = 163 }) => {
    return (
        <View style={[styles.container, { marginTop, width }]}>
            <View style={styles.proImgCon}>
                <Image source={pro} style={styles.proImg} />
            </View>
            <View style={styles.txtCon}>
                <Text>
                    Lorem10 ispsum set amet csjkdf 100
                    Lorem10 ispsum set amet csjkdf 100
                </Text>
            </View>
            <View style={styles.bot}>
                <View>
                    <Text style={styles.del}>&#2547; 23,0000</Text>
                    <Text style={styles.price}>&#2547; 32,30,000</Text>
                </View>
                <Image source={cart} style={styles.cart} />
            </View>
        </View>
    )
}

export default ProductCart