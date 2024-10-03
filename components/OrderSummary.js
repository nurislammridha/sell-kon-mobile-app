import React from 'react'
import { StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import PrimaInput from './PrimaInput'
import MyButton from './MyButton'
const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#FFF",
        width: "100%"
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
})
const OrderSummary = ({ isPromo = false }) => {
    return (
        <View style={styles.container}>
            <PrimaText
                fontSize={18}
                fontWeight='semibold'
                content="Order Summary"
            />
            <View style={styles.item}>
                <PrimaText
                    fontSize={18}
                    fontWeight='medium'
                    content="Subtotal (2 items)"
                    color='#6C6C6C'
                />
                <PrimaText
                    fontSize={12}
                    fontWeight='semibold'
                    content="&#2547; 23,34,333"
                    color='#212121'
                />
            </View>
            <View style={styles.item}>
                <PrimaText
                    fontSize={18}
                    fontWeight='medium'
                    content="Delivery Fee"
                    color='#6C6C6C'
                />
                <PrimaText
                    fontSize={12}
                    fontWeight='semibold'
                    content="&#2547; 23,34,333"
                    color='#212121'
                />
            </View>
            {isPromo && <View style={styles.item}>
                <PrimaInput
                    width={235}
                    height={45}
                    placeholder="Enter Promo Code"
                />
                <MyButton
                    width={110}
                    height={45}
                    content={"Apply"}
                    backgroundColor='#E2E2E2'
                    color='7C7C7C'
                    fontSize={16}
                />
            </View>}
            <View style={styles.item}>
                <PrimaText
                    fontSize={16}
                    fontWeight='medium'
                    content="Total"
                />
                <PrimaText
                    fontSize={12}
                    fontWeight='semibold'
                    content="&#2547; 23,34,333"
                    color='#212121'
                />
            </View>
            <PrimaText
                marginTop={24}
                fontSize={12}
                fontWeight='regular'
                content="*Order Delivery Policy for this order can be found here"
                color='#707070'
            />
            <MyButton
                width={"100%"}
                height={45}
                content={"Please Order"}
                backgroundColor='#000'
                color='#FFF'
                fontSize={16}
                marginTop={18}
            />
        </View>
    )
}

export default OrderSummary