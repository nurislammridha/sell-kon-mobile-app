import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import filter from '../assets/icons/filter.png'
import Product from '../components/Product'
import SelectProducts from '../components/SelectProducts'
import PrimaText from '../components/PrimaText'
import FullWidthButton from '../components/FullWidthButton'
import AddressOrder from '../components/AddressOrder'
import SelectedProducts from '../components/SelectedProducts'
import OrderSummary from '../components/OrderSummary'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA",
        paddingBottom: 120
    },
    proRel: {
        marginTop: 8,
        backgroundColor: "#FFF",
    },

})
const OrderPage = ({ navigation }) => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='Checkout'
                isRightIcon={false}
                navigation={navigation}
            />
            <ScrollView>
                <View style={styles.proRel}>
                    <AddressOrder />
                </View>
                <View style={styles.proRel}>
                    <SelectedProducts />
                </View>
                <View style={styles.proRel}>
                    <OrderSummary
                        isPromo={true}
                        navigation={navigation}
                        url='Payment'
                    />
                </View>

            </ScrollView>

        </View>
    )
}

export default OrderPage