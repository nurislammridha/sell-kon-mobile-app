import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import shop from '../assets/images/slide1.png'
import logo from '../assets/icons/rocket.png'
import star from '../assets/icons/star.png'
import fill from '../assets/icons/starFill.png'
import PrimaText from './PrimaText'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFF",
        paddingBottom: 16,
        paddingTop: 16,
    },
    img: {
        width: "100%",
        height: 66,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bot: {
        marginLeft: 10,
        marginTop: -34,
        display: 'flex',
        flexDirection: 'row'
    },
    icn: {
        width: 66,
        height: 66,
        borderRadius: 33,
        marginRight: 8
    },
    star: {
        marginTop: 3,
        display: 'flex',
        flexDirection: 'row'
    },
    item: {
        width: 12,
        height: 12,
        marginLeft: 2
    }
})
const ShopAddress = ({ data }) => {
    const { shopLogo, shopName, sellerAddress } = data || {}
    return (
        <View style={styles.container}>
            <Image source={shop} style={styles.img} />
            <View style={styles.bot}>
                <Image source={{ uri: shopLogo?.url }} style={styles.icn} />
                <View>
                    <PrimaText
                        content={shopName}
                        fontSize={16}
                        fontWeight="medium"
                        color='#333'
                        marginTop={38}
                    />
                    <PrimaText
                        content='Delivery in 1 to 5 days'
                        fontSize={12}
                        color='#878787'
                        marginTop={2}
                    />
                    <PrimaText
                        content={sellerAddress}
                        fontSize={12}
                        color='#878787'
                        marginTop={2}
                    />
                    <View style={styles.star}>
                        <Image source={fill} style={styles.item} />
                        <Image source={fill} style={styles.item} />
                        <Image source={fill} style={styles.item} />
                        <Image source={fill} style={styles.item} />
                        <Image source={star} style={styles.item} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ShopAddress