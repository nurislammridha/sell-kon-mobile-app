import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import confirm from '../assets/icons/order/Confirm.png'
import confirmed from '../assets/icons/order/Confirm2.png'
import create from '../assets/icons/order/Created.png'
import created from '../assets/icons/order/Created2.png'
import deliver from '../assets/icons/order/Delivered.png'
import delivered from '../assets/icons/order/Delivered2.png'
import pick from '../assets/icons/order/Picked.png'
import picked from '../assets/icons/order/Picked2.png'
import process from '../assets/icons/order/Processing.png'
import processing from '../assets/icons/order/Processing2.png'
import ship from '../assets/icons/order/Shipped.png'
import shipped from '../assets/icons/order/Shipped2.png'
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 16,
        width: "100%"
    },
    title: {
        paddingBottom: 8,
        borderBottomColor: "#E4E3E3",
        borderBottomWidth: 1
    },
    viewCont: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row'
    },
    left: {
        marginRight: 31
    },
    right: {},
    item: {
        height: 48,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    dash: {
        width: 2,
        height: 47,
        marginLeft: 13,
        borderLeftWidth: 1,
        borderLeftColor: "#000"
    },
    dotted: {
        width: 2,
        height: 47,
        marginLeft: 13,
        borderLeftWidth: 1,
        borderLeftColor: "#DEDEDE",
        borderStyle: 'dashed'
    },
    img: {
        width: 26,
        height: 26
    }
})
const OrderTimeLine = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <PrimaText
                    fontSize={18}
                    fontWeight='medium'
                    color='#212121'
                    content='Order Timeline'
                />
            </View>
            <View style={styles.viewCont}>
                <View style={styles.left}>
                    <Image source={created} style={styles.img} />
                    <View style={styles.dash}></View>
                    <Image source={confirmed} style={styles.img} />
                    <View style={styles.dash}></View>
                    <Image source={processing} style={styles.img} />
                    <View style={styles.dash}></View>
                    <Image source={picked} style={styles.img} />
                    <View style={styles.dotted}></View>
                    <Image source={ship} style={styles.img} />
                    <View style={styles.dotted}></View>
                    <Image source={deliver} style={styles.img} />
                </View>
                <View style={styles.right}>
                    <View style={styles.item}>
                        <PrimaText
                            fontSize={16}
                            fontWeight='medium'
                            content='Created'
                        />
                        <PrimaText
                            fontSize={11}
                            content='26May 2021  12:50pm'
                            color='#797979'
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaText
                            fontSize={16}
                            fontWeight='medium'
                            content='Confirm'
                        />
                        <PrimaText
                            fontSize={11}
                            content='26May 2021  12:50pm'
                            color='#797979'
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaText
                            fontSize={16}
                            fontWeight='medium'
                            content='Processing'
                        />
                        <PrimaText
                            fontSize={11}
                            content='26May 2021  12:50pm'
                            color='#797979'
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaText
                            fontSize={16}
                            fontWeight='medium'
                            content='Picked'
                        />
                        <PrimaText
                            fontSize={11}
                            content='26May 2021  12:50pm'
                            color='#797979'
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaText
                            fontSize={16}
                            fontWeight='medium'
                            content='Shipped'
                        />
                        <PrimaText
                            fontSize={11}
                            content='26May 2021  12:50pm'
                            color='#797979'
                        />
                    </View>
                    <View style={styles.item}>
                        <PrimaText
                            fontSize={16}
                            fontWeight='medium'
                            content='Delivered'
                        />
                        <PrimaText
                            fontSize={11}
                            content='26May 2021  12:50pm'
                            color='#797979'
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default OrderTimeLine