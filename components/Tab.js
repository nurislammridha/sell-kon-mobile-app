import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import icon from '../assets/icons/up.png'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFF",
        paddingLeft: 16,
        // paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        borderTopColor: "#888",
        borderTopWidth: 1
    },
    item: {
        display: 'flex',
        alignItems: "center",
        marginRight: 18
    },
    img: {
        width: 12,
        height: 6,
        marginTop: 3
    }
})
const Tab = () => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='All' />
                    <Image source={icon} style={styles.img} />
                </View>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='Created' />
                    <Image source={icon} style={styles.img} />
                </View>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='Confirm' />
                    <Image source={icon} style={styles.img} />
                </View>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='Processing' />
                    <Image source={icon} style={styles.img} />
                </View>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='Picked' />
                    <Image source={icon} style={styles.img} />
                </View>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='Shipped' />
                    <Image source={icon} style={styles.img} />
                </View>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='Delivered' />
                    <Image source={icon} style={styles.img} />
                </View>
                <View style={styles.item}>
                    <PrimaText fontSize={12} color='#212121' content='Cancelled' />
                    <Image source={icon} style={styles.img} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Tab