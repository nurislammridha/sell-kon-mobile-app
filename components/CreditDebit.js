import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import card from '../assets/icons/card.png'
import ame from '../assets/icons/american_express.png'
import money from '../assets/icons/money.png'
import visa from '../assets/icons/visa2.png'
import right from '../assets/icons/right.png'
import PrimaText from './PrimaText'
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#FFF",
        width: "100%"
    },
    left: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgCard: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    img: {
        width: 20,
        height: 14,
        marginRight: 12
    },
    imgVisa: {
        width: 50,
        height: 14,
        marginRight: 12
    },
    imgRight: {
        width: 28,
        height: 24,
        marginLeft: 12
    },
})
const CreditDebit = () => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image source={card} style={styles.imgCard} />
                <PrimaText
                    fontSize={16}
                    color='#000'
                    content="Credit/Debit Card"
                />
            </View>
            <View style={styles.right}>
                <Image source={ame} style={styles.img} />
                <Image source={money} style={styles.img} />
                <Image source={visa} style={styles.imgVisa} />
                <Image source={right} style={styles.imgRight} />
            </View>
        </View>
    )
}

export default CreditDebit