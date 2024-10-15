import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import category from '../assets/icons/mobileCategory.png'
import campaign from '../assets/icons/mobileCampaign.png'
import order from '../assets/icons/mobileOrder.png'
import wish from '../assets/icons/mobileWish.png'
const styles = StyleSheet.create({
    category: {
        paddingTop: 16,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    catImg: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    catItem: {
        display: "flex",
        alignItems: "center"
    },
    catText: {
        marginTop: 5,
        fontSize: 13
    }

})
const Category = () => {
    return (
        <View style={styles.category}>
            <View style={styles.catItem}>
                <Image source={category} style={styles.catImg} />
                <Text style={styles.catText}>Categories</Text>
            </View>
            <View style={styles.catItem}>
                <Image source={campaign} style={styles.catImg} />
                <Text style={styles.catText}>Campaigns</Text>
            </View>
            <View style={styles.catItem}>
                <Image source={order} style={styles.catImg} />
                <Text style={styles.catText}>Order</Text>
            </View>
            <View style={styles.catItem}>
                <Image source={wish} style={styles.catImg} />
                <Text style={styles.catText}>Wishlist</Text>
            </View>
        </View>
    )
}

export default Category