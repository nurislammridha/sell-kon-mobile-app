import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
import cart from '../assets/icons/shop_cart.png'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        // backgroundColor: "#F00",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FAFAFA",
        // width: 163,
        // height: 249,
        // padding: 12
    },
    proImgCon: {
        display: 'flex',
        alignItems: 'center'
    },

    txtCon: {
        marginTop: 8,
        height: 48,
        paddingLeft: 5,
        paddingRight: 5,
    },
    txt: {
        color: '#333333',
        fontSize: 12,
        lineHeight: 17
    },
    del: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 13,
        color: "#878787",
        lineHeight: 18,
        textDecorationLine: 'line-through'
    },
    price: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        fontSize: 14,
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
        height: 33,
        // borderWidth: 1,
        // borderColor: '#f00',
        backgroundColor: "#ddd"
    }
})
const ProductCart = ({ marginTop = 0, width = 163, height = "auto", data }) => {
    const { productIcon, productName, mrp, regularDiscount } = data || {}
    return (
        <View style={[styles.container, { marginTop, width, height }]}>
            <View style={styles.proImgCon}>
                <Image source={{ uri: productIcon?.url }} style={{ width, height: width, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            </View>
            <View style={styles.txtCon}>
                <Text style={styles.txt}>
                    {productName || ""}
                </Text>
            </View>
            <View style={styles.bot}>
                <View>
                    <Text style={styles.del}>&#2547;{mrp || ""}</Text>
                    <Text style={styles.price}>&#2547;{regularDiscount || ""}</Text>
                </View>
                <TouchableOpacity onPress={() => console.log("HI")}><Image source={cart} style={styles.cart} /></TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCart