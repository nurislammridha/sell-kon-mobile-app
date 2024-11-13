import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import cartIcon from '../assets/icons/cartFooter.png'
// import homeIcon from '../assets/icons/home11.png'
import homeIcon from '../assets/icons/home.png'
import campaignIcon from '../assets/icons/campaign11.png'
import userLogo from '../assets/icons/userIcon.png'
const styles = StyleSheet.create({
    footerCon: {
        marginTop: 14,
        backgroundColor: "#FFFFFF",
        height: 76,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        left: 0,
        bottom: 63,
        width: "100%",
        // backgroundColor: "#F00"
    },
    footItem: {
        width: 40,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    footImg: {
        height: 24,
        width: 24
    },
    footText: {
        fontSize: 10,
        color: "#333"
    }
})
const Footer = ({ navigation }) => {
    return (
        <View style={styles.footerCon}>
            <View style={styles.footItem}>
                <Image source={homeIcon} style={styles.footImg} />
                <Text style={styles.footText}>HOME</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <View style={styles.footItem}>
                    <Image source={campaignIcon} style={styles.footImg} />
                    <Text style={styles.footText}>UTSHOB</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CheckOut")}>
                <View style={styles.footItem}>
                    <Image source={cartIcon} style={styles.footImg} />
                    <Text style={styles.footText}>CART</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("UserTab")}>
                <View style={styles.footItem}>
                    <Image source={userLogo} style={styles.footImg} />
                    <Text style={styles.footText}>PROFILE</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Footer