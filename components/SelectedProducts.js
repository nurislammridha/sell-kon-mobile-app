import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
// import EStyleSheet from 'react-native-extended-stylesheet';
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 16,
    },
    proImg: {
        width: 76,
        height: 76,
        marginRight: 18
    },
    // content: {
    //     width: 300,
    // },
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
        borderBottom: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC"
    },
    'df16:last-child': {
        borderBottomWidth: 0,
        backgroundColor: "red"
    },
    imgCon: {
        display: 'flex',
        alignItems: 'center'
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
const SelectedProducts = ({ navigation = null }) => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <View style={{ ...styles.mb8, ...styles.df }}>
                <Text style={styles.title}>Products</Text>
                <Text style={styles.var}>Variation</Text>
            </View>
            {[1, 2, 3, 3].map(({ item, index }) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate("Details")}>
                    <View style={styles.df16}>
                        <View style={styles.imgCon}>
                            <Image source={pro} style={styles.proImg} />
                        </View>
                        <View style={{ width: (width - 128) }}>
                            <View>
                                <Text style={styles.txt}>
                                    Hundai sonata Sedan
                                </Text>
                            </View>
                            <View style={{ ...styles.mt8, ...styles.df }}>
                                <Text style={styles.number}>&#2547; 23,000X1</Text>
                                <Text style={styles.size}>Size: 0</Text>
                            </View>
                            <View style={{ ...styles.mt2, ...styles.df }}>
                                <Text style={styles.price}>&#2547; 23,000X1</Text>
                                <Text style={styles.size}>Color: Blue</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default SelectedProducts