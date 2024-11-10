import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import pro from '../assets/images/pro3.jpg'
import PrimaText from './PrimaText'
import Product from './Product'
const styles = StyleSheet.create({
    productsCon: {
        marginTop: 10,
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: "#FFFFFF",
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

    allProducts: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    allProduct: {
        marginTop: 10,
        // width: 190,
        height: 249,
        // marginRight: 14,
        borderRadius: 5,
        padding: 5,
        borderColor: "#FAFAFA",
        borderWidth: 1,
    },
    all: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
const AllProducts = ({ navigation = null }) => {
    const { width } = Dimensions.get('screen')
    // console.log('width', width)
    return (
        <View style={styles.productsCon}>
            <Text style={styles.proTitle}>All Product</Text>
            <View style={styles.allProducts}>
                {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (<>
                    <Product
                        key={index}
                        width={(width / 2) - 30}
                        height={"auto"}
                        marginTop={10}
                        imgWidth={"100%"}
                        imgHeight={(width / 2) - 30}
                        navigation={navigation}
                    />
                    {/* <View style={styles.allProduct}>
                        <View style={styles.proCon}>
                            <Image source={pro} style={styles.allProImg} />
                        </View>
                        <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                        <Text style={styles.del}>&#2547; 45,00,000</Text>
                        <Text style={styles.price}>&#2547; 45,00,000</Text>
                    </View> */}
                </>))}
                <TouchableOpacity
                    onPress={() => navigation.navigate("AllProducts")}
                    style={[styles.allProduct, { width: (width / 2) - 30 }, styles.all]}
                >
                    <PrimaText
                        content='VIEW ALL'
                        color='#888'
                        fontWeight='medium'
                        fontSize={22}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AllProducts