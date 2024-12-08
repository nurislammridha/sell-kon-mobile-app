import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
import Product from './Product'
const styles = StyleSheet.create({
    productsCon: {
        marginTop: 10,
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: "#FFF",
    },
    proTitle: {
        marginTop: 14,
        fontSize: 16,
        fontWeight: "medium",
        color: "#333333",
    },
    products: {
        marginTop: 14,
        display: "flex",
        flexDirection: "row",
        overflow: "scroll",
    },
    proImg: {
        width: 65,
        height: 65
    },
    product: {
        width: 110,
        height: 178,
        marginRight: 14,
        borderRadius: 5,
        padding: 5,
        borderColor: "#FAFAFA",
        borderWidth: 1
    },
    proCon: {
        display: "flex",
        alignItems: "center"
    },
    proName: {
        marginTop: 10,
        minHeight: 45,
        fontSize: 12,
        fontWeight: '500',
    },
    del: {
        marginTop: 7,
        fontSize: 8,
        color: "#878787",
        textDecorationLine: "line-through"
    },
    price: {
        marginTop: 5,
        fontSize: 12,
        color: "#F54C54"
    },
})
const HomeProducts = ({ title, navigation, route }) => {
    return (
        <View style={styles.productsCon}>
            <Text style={styles.proTitle}>{title}</Text>
            <View style={styles.products}>
                <ScrollView
                    horizontal={true}
                >
                    {[1, 2, 3, 4, 5].map((_, indx) => (
                        <Product
                            width={110}
                            height={"auto"}
                            marginRight={14}
                            imgWidth={"100%"}
                            imgHeight={110}
                            navigation={navigation}
                        />))}
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeProducts