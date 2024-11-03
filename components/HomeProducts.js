import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
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
        fontWeight: "800"
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
const HomeProducts = ({ title }) => {
    return (
        <View style={styles.productsCon}>
            <Text style={styles.proTitle}>{title}</Text>
            <View style={styles.products}>
                <TouchableOpacity
                // onPress={() => navigation.navigate("Details")}
                >
                    <View style={styles.product}>
                        <View style={styles.proCon}>
                            <Image source={pro} style={styles.proImg} />
                        </View>
                        <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                        <Text style={styles.del}>&#2547; 45,00,000</Text>
                        <Text style={styles.price}>&#2547; 45,00,000</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.product}>
                    <View style={styles.proCon}>
                        <Image source={pro} style={styles.proImg} />
                    </View>
                    <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                    <Text style={styles.del}>&#2547; 45,00,000</Text>
                    <Text style={styles.price}>&#2547; 45,00,000</Text>
                </View>
                <View style={styles.product}>
                    <View style={styles.proCon}>
                        <Image source={pro} style={styles.proImg} />
                    </View>
                    <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                    <Text style={styles.del}>&#2547; 45,00,000</Text>
                    <Text style={styles.price}>&#2547; 45,00,000</Text>
                </View>
                <View style={styles.product}>
                    <View style={styles.proCon}>
                        <Image source={pro} style={styles.proImg} />
                    </View>
                    <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                    <Text style={styles.del}>&#2547; 45,00,000</Text>
                    <Text style={styles.price}>&#2547; 45,00,000</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeProducts