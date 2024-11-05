import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
import checkIcon from '../assets/icons/selected.png'
import PlusMinus from './PlusMinus'
// import EStyleSheet from 'react-native-extended-stylesheet';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 16,
        width: "100%"
    },
    proImg: {
        width: 78,
        height: 78,
        marginLeft: 25
    },
    checkImg: {
        width: 28,
        height: 28,
    },
    imgCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    content: {
        width: 240,
    },
    txt: {
        color: "#333",
        fontSize: 14,
        fontSize: 18,
        width: "100%"
    },
    number: {
        color: "#878787",
        fontSize: 10,

    },
    size: {
        color: "#212121",
        fontSize: 11
    },
    var: {
        color: "#212121",
        fontSize: 14
    },
    price: {
        fontWeight: '600',
        color: '#F54C54',
        fontSize: 12
    },
    title: {
        fontSize: 18,
        color: "#212121",
        fontWeight: '600'
    },
    df: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    df16: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 8,
        paddingTop: 8,
    },
    mt8: {
        marginTop: 8
    },
    mt2: {
        marginTop: 2
    },
    mb8: {
        marginBottom: 8
    },
})
const SelectProducts = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {[1, 2, 3, 3].map(({ item, index }) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate("Details")}
                >
                    <View style={styles.item} >
                        <View style={styles.imgCon}>
                            <Image source={checkIcon} style={styles.checkImg} />
                            <Image source={pro} style={styles.proImg} />
                        </View>
                        <View style={styles.content}>
                            <View>
                                <Text style={styles.txt}>
                                    Hundai sonata Sedan
                                </Text>
                            </View>
                            <View style={{ ...styles.mt8, ...styles.df }}>
                                <Text style={styles.number}>&#2547; 23,000X1</Text>
                            </View>
                            <View style={{ ...styles.mt2, ...styles.df }}>
                                <Text style={styles.price}>&#2547; 23,000X1</Text>
                                <PlusMinus />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default SelectProducts