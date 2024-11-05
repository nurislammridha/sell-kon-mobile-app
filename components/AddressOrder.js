import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import MyButton from './MyButton'
import PrimaText from './PrimaText'
import pen from "../assets/icons/pen.png"
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 16,
        width: "100%"
    },
    order: {
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    address: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: 30,
        height: 30
    }
})
const AddressOrder = ({ isOrder = false, navigation = null }) => {
    return (
        <View style={styles.container}>
            {isOrder && <View style={styles.order}>
                <View>
                    <PrimaText
                        fontSize={16}
                        color='#212121'
                        content='Order ID: GBO0231324'
                    />
                    <PrimaText
                        fontSize={12}
                        color='#575757'
                        content='1 Sep, 3:48pm'
                        marginTop={4}
                    />
                </View>
                <MyButton
                    width={46}
                    height={23}
                    content='Copy'
                    borderWidth={1}
                    borderColor='#E7E7E7'
                    color='#575757'
                    fontSize={12}
                />
            </View>}
            <View style={styles.address}>
                <View style={{ width: 238 }}>
                    <PrimaText
                        fontSize={16}
                        color='#212121'
                        content='Nurislam'
                        fontWeight='medium'
                    />
                    <PrimaText
                        fontSize={12}
                        color='#797979'
                        content='01753109207'
                        fontWeight='medium'
                        marginTop={3}
                    />
                    <PrimaText
                        fontSize={12}
                        color='#797979'
                        content='House -237/1,Road, W4,  Eastern housing,Pollobi, Dhaka-1216'
                        fontWeight='medium'
                        marginTop={3}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("EditAddress")}>
                    <Image source={pen} style={styles.img} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddressOrder