import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import AddressOrder from '../components/AddressOrder'
import FullWidthButton from '../components/FullWidthButton'
import PrimaText from '../components/PrimaText'
import PrimaInput from '../components/PrimaInput'
import AddressRadio from '../components/AddressRadio'
import PrimaSelect from '../components/PrimaSelect'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA",
        height: '100%'
    },
    scroll: {
        marginTop: 8,
        backgroundColor: "#FFF",
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 300,
        marginBottom: 70
    },
    add: {
        display: 'flex',
        paddingLeft: 16,
        paddingRight: 16,
        position: 'absolute',
        width: '100%',
        bottom: 5,
    },
    bth: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    }
})
const UserInfo = () => {
    return (<>
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='User Info'
                isRightIcon={false}
            />
            <ScrollView style={styles.scroll}>
                <PrimaText
                    content='Full Name*'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaInput
                    marginTop={12}
                    placeholder='enter full name'
                    width={"100%"}
                />
                <PrimaText
                    content='Email*'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaInput
                    marginTop={12}
                    placeholder='enter email'
                    width={"100%"}
                />
                <PrimaText
                    content='Phone'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaInput
                    marginTop={12}
                    placeholder='enter phone'
                    width={"100%"}
                />
                <PrimaText
                    content='Gender'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaSelect marginTop={12} />
                <PrimaText
                    content='Birthday'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <View style={styles.bth}>
                    <PrimaSelect width={125} />
                    <PrimaSelect width={125} />
                    <PrimaSelect width={125} />
                </View>
            </ScrollView>
            <View style={styles.add}>
                <FullWidthButton
                    content='Save Changes'
                />
            </View>
        </View>

    </>)
}

export default UserInfo