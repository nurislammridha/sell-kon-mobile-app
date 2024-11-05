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
import CreditDebit from '../components/CreditDebit'
import PaymentCard from '../components/PaymentCard'
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
    itemCon: {
        backgroundColor: "#FFF",
        padding: 16,
        marginTop: 8,
        position: 'absolute',
        bottom: 110,
        width: "100%",
        height: "auto"
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    mr: {
        marginTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5"
    }
})
const PaymentPage = ({ navigation }) => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='Payment Method'
                isRightIcon={false}
                navigation={navigation}
            />
            <ScrollView>
                <View style={{ paddingLeft: 16 }}>
                    <PrimaText
                        marginTop={16}
                        fontSize={12}
                        backgroundColor='#FAFAFA'
                        content='Recomended Method(s)'
                    />
                </View>
                <View style={styles.proRel}>
                    <CreditDebit />
                </View>
                <View style={{ paddingLeft: 16 }}>
                    <PrimaText
                        marginTop={16}
                        fontSize={12}
                        backgroundColor='#FAFAFA'
                        content='Saved Method(s)'
                    />
                </View>
                <View style={styles.proRel}>
                    <PaymentCard />
                </View>
                <View style={{ paddingLeft: 16 }}>
                    <PrimaText
                        marginTop={16}
                        fontSize={12}
                        backgroundColor='#FAFAFA'
                        content='Payment Method(s)'
                    />
                </View>
                <View style={[styles.proRel, { paddingBottom: 100 }]}>
                    <PaymentCard
                        isLineTwo={false}

                    />
                </View>

            </ScrollView>
            <View style={styles.itemCon}>
                <View style={[styles.item, styles.mr]}>
                    <PrimaText
                        content='Subtotal (1 items & Delivery fee)'
                        color='#6C6C6C'
                        fontSize={14}
                        fontWeight='medium'
                    />
                    <PrimaText
                        content='&#2547;1234434'
                        color='#000'
                        fontSize={14}
                        fontWeight='medium'
                    />
                </View>
                <View style={[styles.item, { marginTop: 8 }]}>
                    <PrimaText
                        content='Total'
                        color='#000'
                        fontSize={16}
                        fontWeight='medium'
                    />
                    <PrimaText
                        content='&#2547;1234434'
                        color='#000'
                        fontSize={14}
                        fontWeight='medium'
                    />
                </View>
            </View>
        </View>
    )
}

export default PaymentPage