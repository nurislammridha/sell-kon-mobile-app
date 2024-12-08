import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
        width: "100%",
        // height: 43
        height: 90
    },
    product: {
        width: 92,
        // height: 99,
        height: "auto",
        // marginRight: 16,
        borderRadius: 5,
        padding: 5,
        borderColor: "#FAFAFA",
        // borderColor: "#F00",
        borderWidth: 1
    },
    proCon: {
        display: "flex",
        alignItems: "center"
    },
    proName: {
        marginTop: 10,
        height: 28,
        fontSize: 10,
        color: "#333333",
        // backgroundColor: 'red'
    },

    catTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    viewAll: {
        with: 77,
        height: 29,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: "#FAFAFA",
        borderWidth: 1,
    },
    viewAllText: {
        fontSize: 14,
    },
})
const CategoryProducts = ({ content = "", navigation = null, url = "" }) => {
    return (
        <View style={styles.productsCon}>
            <View style={styles.catTop}>
                <Text style={styles.proTitle}>{content}</Text>
                <View style={styles.viewAll}>
                    <Text style={styles.viewAllText}>View All</Text>
                </View>
            </View>
            <View style={styles.products}>
                <ScrollView horizontal={true}>
                    {[1, 2, 3, 4, 5, 5, 6].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate(url)}>
                            <View style={styles.product}>
                                <View style={styles.proCon}>
                                    <Image source={pro} style={styles.proImg} />
                                </View>
                                <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default CategoryProducts