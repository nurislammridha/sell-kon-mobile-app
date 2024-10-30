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
import OrderTimeLine from '../components/OrderTimeLine'
import MyButton from '../components/MyButton'
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
    payment: {
        marginTop: 8,
        backgroundColor: "#FFF",
        padding: 16
    },
    paymentItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

})
const OrderDetails = () => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='Order Details'
                isRightIcon={false}
            />
            <ScrollView>
                <View style={styles.proRel}>
                    <AddressOrder
                        isOrder
                    />
                </View>
                <View style={styles.proRel}>
                    <OrderTimeLine />
                </View>
                <View style={styles.proRel}>
                    <SelectedProducts />
                </View>
                <View style={styles.proRel}>
                    <OrderSummary
                        isOrderBtn={false}
                    />
                </View>
                <View style={styles.payment}>
                    <View style={styles.paymentItem}>
                        <PrimaText
                            content='Payment Status'
                            fontSize={18}
                            fontWeight='medium'
                        />
                        <MyButton
                            content='Paid'
                            width={41}
                            height={23}
                            backgroundColor='#1976D2'
                            color='#FFF'
                            fontSize={12}
                        />
                    </View>
                    <PrimaText
                        content='bKash'
                        fontSize={16}
                        fontWeight='medium'
                        color='#707070'
                        marginTop={16}
                    />
                </View>
            </ScrollView>

        </View>
    )
}

export default OrderDetails