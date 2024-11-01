import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import AddressOrder from '../components/AddressOrder'
import FullWidthButton from '../components/FullWidthButton'
import PrimaText from '../components/PrimaText'
import PrimaInput from '../components/PrimaInput'
import AddressRadio from '../components/AddressRadio'
import PrimaSelect from '../components/PrimaSelect'
import address from '../assets/icons/address.png'
import wish from '../assets/icons/wishg.png'
import user from '../assets/icons/user.png'
import order from '../assets/icons/order.png'
import logout from '../assets/icons/logout.png'
import userIcn from '../assets/icons/userIcon2.png'
import pen from '../assets/icons/pen.png'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA",
        height: '100%'
    },
    img: {
        width: 24,
        height: 24,
        marginRight: 12
    },
    foot: {
        marginTop: 10,
        backgroundColor: "#FFF",
        padding: 20,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    body: {
        backgroundColor: "#FFF",
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 100
    },
    userCon: {
        marginTop: 30
    },
    user: {
        width: 126,
        height: 126
    },
    pen: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    list: {
        marginTop: 40
    },
    item: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row'
    },
    imgItm: {
        width: 24,
        height: 24,
        marginRight: 10
    }
})
const UserTab = () => {
    return (<>
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='User'
                isRightIcon={false}
            />
            <View style={styles.body}>
                <View style={styles.userCon}>
                    <Image source={userIcn} style={styles.user} />
                    <Image source={pen} style={styles.pen} />
                </View>
                <View style={styles.list}>
                    <View style={styles.item}>
                        <Image source={user} style={styles.imgItm} />
                        <PrimaText
                            content='User Info'
                            color='#130F26'
                            fontWeight='medium'
                            fontSize={20}
                        />
                    </View>
                    <View style={styles.item}>
                        <Image source={order} style={styles.imgItm} />
                        <PrimaText
                            content='Order'
                            color='#130F26'
                            fontWeight='medium'
                            fontSize={20}
                        />
                    </View>
                    <View style={styles.item}>
                        <Image source={address} style={styles.imgItm} />
                        <PrimaText
                            content='Address'
                            color='#130F26'
                            fontWeight='medium'
                            fontSize={20}
                        />
                    </View>
                    <View style={styles.item}>
                        <Image source={wish} style={styles.imgItm} />
                        <PrimaText
                            content='Wishlist'
                            color='#130F26'
                            fontWeight='medium'
                            fontSize={20}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.foot}>
                <Image source={logout} style={styles.img} />
                <PrimaText
                    content='Logout'
                    fontSize={20}
                    color='#130F26'
                />
            </View>
        </View>

    </>)
}

export default UserTab