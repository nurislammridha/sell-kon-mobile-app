import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import logo from '../assets/images/logoMobile.png'
import search from '../assets/icons/search.png'
import notification from '../assets/icons/notification.png'
const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 23,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        backgroundColor: "#FFF"
    },
    logo: {
        width: 104,
        height: 24
    },
    headerIcon: {
        display: "flex",
        flexDirection: "row",
    },
    headerImg: {
        height: 24,
        width: 24,
        marginLeft: 10
    },
    notification: {
        position: "relative",
    },
    badge: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: "#CC0000",
        color: "#FFF",
        textAlign: "center",
        fontSize: 10,
        position: "absolute",
        top: -5,
        right: 0
    }
})
const Header = ({ navigation = null }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
            <View style={styles.headerIcon}>
                <Image source={search} style={styles.headerImg} />
                <View style={styles.notification}>
                    <Image source={notification} style={styles.headerImg} />
                    <Text style={styles.badge}>2</Text>
                </View>
            </View>
        </View>
    )
}

export default Header