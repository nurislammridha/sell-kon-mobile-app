import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import filter from '../assets/icons/filter.png'
import Product from '../components/Product'
import SelectProducts from '../components/SelectProducts'
import PrimaText from '../components/PrimaText'
import FullWidthButton from '../components/FullWidthButton'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA"
    },
    proRel: {
        marginTop: 8,
        backgroundColor: "#FFF",
    },
    itemCon: {
        backgroundColor: "#FFF",
        padding: 16,
        marginTop: 8,
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
const CheckoutPage = () => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='5 Products'
            />
            <ScrollView>
                <View style={styles.proRel}>
                    <SelectProducts />
                </View>
                <View style={styles.itemCon}>
                    <View style={styles.item}>
                        <PrimaText
                            content='Subtotal (1 items)'
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
                    <View style={[styles.item, styles.mr]}>
                        <PrimaText
                            content='Subtotal (1 items)'
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
                    <View style={{ marginTop: 23 }}>
                        <FullWidthButton
                            content="Checkout"
                        />
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default CheckoutPage