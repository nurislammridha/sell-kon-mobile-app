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
import Tab from '../components/Tab'
import OrderList from '../components/OrderList'
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
const OrderListPage = ({ navigation }) => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='Order'
                isRightIcon={false}
                navigation={navigation}
            />
            <ScrollView>
                <View style={styles.proRel}>
                    <Tab />
                </View>
                <View style={styles.proRel}>
                    <OrderList navigation={navigation} />
                </View>

            </ScrollView>

        </View>
    )
}

export default OrderListPage