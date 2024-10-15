import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import cartIcon from '../assets/icons/cartFooter.png'
import homeIcon from '../assets/icons/home11.png'
import campaignIcon from '../assets/icons/campaign11.png'
import userLogo from '../assets/icons/userIcon.png'
const styles = StyleSheet.create({
    footerCon: {
        marginTop: 14,
        backgroundColor: "#FFF",
        height: 76,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        left: 0,
        bottom: 120,
        width: "100%",
        // backgroundColor: "#F00"
    },
    footItem: {
        width: 40,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between'
    },
    footImg: {
        height: 32,
        width: 32
    },
    footText: {
        fontSize: 10
    }
})
const Footer = () => {
    return (
        <View style={styles.footerCon}>
            <View style={styles.footItem}>
                <Image source={homeIcon} style={styles.footImg} />
                <Text style={styles.footText}>HOME</Text>
            </View>
            <View style={styles.footItem}>
                <Image source={campaignIcon} style={styles.footImg} />
                <Text style={styles.footText}>UTSHOB</Text>
            </View>
            <View style={styles.footItem}>
                <Image source={cartIcon} style={styles.footImg} />
                <Text style={styles.footText}>CART</Text>
            </View>
            <View style={styles.footItem}>
                <Image source={userLogo} style={styles.footImg} />
                <Text style={styles.footText}>Profile</Text>
            </View>
        </View>
    )
}

export default Footer