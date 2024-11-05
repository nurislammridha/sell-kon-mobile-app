import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import filter from '../assets/icons/filter.png'
import Product from '../components/Product'
import ProductCart from '../components/ProductCart'
import ShopAddress from '../components/ShopAddress'
import MyButton from '../components/MyButton'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA",
        paddingBottom: 65
    },
    proRel: {
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 8,
        backgroundColor: "#FFF",

    },
    products: {
        display: "flex",
        flexDirection: "row",
        overflow: "scroll",
        marginTop: 14,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
})
const ShopPage = ({ navigation }) => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader
                icon={filter}
                isMiddle
                content='Shop'
                navigation={navigation}
            />
            <ScrollView>
                <View style={styles.proRel}>
                    <ShopAddress />
                </View>
                <View style={styles.proRel}>

                    <View style={styles.products}>
                        {[1, 2, 3, 4, 4, 5, 4].map((_, indx) => (
                            <ProductCart marginTop={16} width={(width / 2) - 30} />
                        ))}
                    </View>
                </View>
                <MyButton
                    marginTop={10}
                    content='View more product'
                    width={"100%"}
                    borderWidth={1}
                />
            </ScrollView>

        </View>
    )
}

export default ShopPage