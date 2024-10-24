import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import filter from '../assets/icons/filter.png'
import Product from '../components/Product'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA"
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
const AllProductsPage = () => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader
                icon={filter}
                isMiddle
                content='Showing 250products'
            />
            <ScrollView>
                <View style={styles.proRel}>

                    <View style={styles.products}>
                        {[1, 2, 3, 4, 4, 5, 4].map((_, indx) => (
                            <Product marginTop={16} width={(width / 2) - 30} />
                        ))}
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}

export default AllProductsPage