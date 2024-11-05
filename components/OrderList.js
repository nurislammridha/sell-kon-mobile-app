import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import PrimaText from './PrimaText'
import MyButton from './MyButton'
const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        width: "100%",
        backgroundColor: "#FFF"
    },
    item: {
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'flex-end'
    }
})
const OrderList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {[1, 2, 3, 4, 4, 5, 6].map(() => (
                <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
                    <View style={styles.item}>
                        <View style={styles.top}>
                            <PrimaText fontSize={16} fontWeight='medium' content='Order Id: GBO20392494' />
                            <MyButton width={62} height={23} backgroundColor='#B0B2B0' content='Created' />
                        </View>
                        <View style={styles.bottom}>
                            <PrimaText fontSize={22} fontWeight='bold' content='&#2547; 32,4000' color='#F54C54' />
                            <PrimaText fontSize={10} content='21 sep, 3:48pm' color='#212121' />
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default OrderList