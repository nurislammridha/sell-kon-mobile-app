import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import AddressOrder from '../components/AddressOrder'
import FullWidthButton from '../components/FullWidthButton'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA",
        height: '100%',
        // paddingBottom: 100
    },
    proRel: {
        marginTop: 8,
        backgroundColor: "#FFF",
    },
    add: {
        display: 'flex',
        paddingLeft: 16,
        paddingRight: 16,
        position: 'absolute',
        width: '100%',
        bottom: 5,
    }
})
const DeliveryAddress = ({ navigation }) => {
    return (<>
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='Delivery Address'
                isRightIcon={false}
                navigation={navigation}
            />
            <ScrollView style={{ marginBottom: 40 }}>
                {[1, 2, 3, 4, 5, 6].map((_, indx) => (
                    <View style={styles.proRel} key={indx}>
                        <AddressOrder navigation={navigation} />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.add}>
                <FullWidthButton
                    content='Add Address'
                    navigation={navigation}
                    url='AddAddress'
                />
            </View>
        </View>

    </>)
}

export default DeliveryAddress