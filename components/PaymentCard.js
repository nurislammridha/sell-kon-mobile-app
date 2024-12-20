import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import rightIcon from "../assets/icons/right.png"
import bKashIcn from "../assets/icons/cod.png"
import PrimaText from './PrimaText'
const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#FFF",
        width: "100%"
    },
    item: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5"
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 24,
        height: 24
    },
    imgM: {
        width: 24,
        height: 24,
        marginRight: 16
    }
})
const PaymentCard = ({ isLineTwo = true, navigation = null, url = "" }) => {
    return (
        <View style={styles.container}>
            {[1, 2, 3, 4].map((item, index) => (
                <TouchableOpacity
                    // onPress={()=>navigation.navigate(url)}
                    key={index}
                >
                    <View style={styles.item}>
                        <View style={styles.left}>
                            <Image source={bKashIcn} style={styles.imgM} />
                            <View>
                                <PrimaText
                                    fontSize={11}
                                    color='#505050'
                                    content='Account Number'
                                />
                                {isLineTwo && <PrimaText
                                    fontSize={14}
                                    fontWeight='medium'
                                    color='#505050'
                                    marginTop={4}
                                    content="xxx xxxx 3450"
                                />}

                            </View>
                        </View>
                        <Image source={rightIcon} style={styles.img} />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default PaymentCard