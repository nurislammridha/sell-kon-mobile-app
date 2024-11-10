import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import FullWidthButton from './FullWidthButton'
import usr from '../assets/icons/userIcon.png'
import star from '../assets/icons/starFill.png'
import star2 from '../assets/icons/star.png'
import address from '../assets/icons/address.png'
import period from '../assets/icons/period.png'
import delivery from '../assets/icons/delivery.png'
import MyButton from './MyButton'
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingBottom: 10
    },
    sold: {
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#FAFAFA"
    },
    con: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6
    },
    img: {
        width: 28,
        height: 28,
        marginRight: 7
    },
    items: {
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        width: 9,
        height: 9,
        marginRight: 2
    },
    add: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icn: {
        width: 16,
        height: 16,
        marginRight: 4
    }
})
const SoldBy = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.sold}>
                <PrimaText
                    content='Sold By'
                    fontSize={14}
                    fontWeight='bold'
                />
            </View>
            <View style={styles.con}>
                <Image source={usr} style={styles.img} />
                <View>
                    <PrimaText content='SellKon Mall' fontSize={14} />
                    <View style={styles.items}>
                        <Image source={star} style={styles.star} />
                        <Image source={star} style={styles.star} />
                        <Image source={star} style={styles.star} />
                        <Image source={star} style={styles.star} />
                        <Image source={star2} style={styles.star} />
                        <PrimaText content='(1.8K)' fontSize={13} fontWeight='bold' />
                    </View>
                </View>
            </View>
            <View style={styles.add}>
                <Image source={address} style={styles.icn} />
                <PrimaText content='House #1757, Road-3, Block A, Bashundhara riverview, keraniganj, Dhaka' fontSize={13} />
            </View>
            <View style={styles.add}>
                <Image source={period} style={styles.icn} />
                <PrimaText content='Delivery in 1 to 3 days' fontSize={13} />
            </View>
            <View style={styles.add}>
                <Image source={delivery} style={styles.icn} />
                <PrimaText content='Delivery in 1 to 3 days' fontSize={13} />
            </View>
            <MyButton
                content='Visit Store'
                marginTop={16}
                backgroundColor='#FFFFFF'
                borderColor="#c5c5c5"
                color='#000'
                width={"100%"}
                height={32}
                fontSize={13}
                borderWidth={1}
                navigation={navigation}
                url='Shop'
            />
        </View>
    )
}

export default SoldBy