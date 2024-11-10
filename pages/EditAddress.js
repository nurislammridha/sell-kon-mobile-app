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
        // paddingBottom: 300,
        // marginBottom: 70
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
const EditAddress = ({ navigation }) => {
    return (<>
        <View style={styles.container}>
            <SecondaryHeader
                isMiddle
                content='Edit Delivery Address'
                isRightIcon={false}
                navigation={navigation}
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
                    content='Phone Number*'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaInput
                    marginTop={12}
                    placeholder='enter phone number'
                    width={"100%"}
                />
                <AddressRadio marginTop={16} />
                <PrimaText
                    content='Division*'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaSelect marginTop={12} />
                <PrimaText
                    content='District*'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaSelect marginTop={12} />
                <PrimaText
                    content='Sub-District(Upazila)*'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaSelect marginTop={12} />
                <PrimaText
                    content='Area (Nearest area)*'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaSelect marginTop={12} />
                <PrimaText
                    content='House/Holding, Road/Para, Block/Avenue'
                    color='#959595'
                    fontSize={16}
                    fontWeight='medium'
                    marginTop={24}
                />
                <PrimaInput
                    marginTop={12}
                    placeholder='enter phone number'
                    width={"100%"}
                />
                <FullWidthButton
                    content='Save'
                    marginTop={55}
                    marginBottom={100}
                    height={56}
                    fontSize={20}
                />
            </ScrollView>
            {/* <View style={styles.add}>
                <FullWidthButton
                    content='Save'
                />
            </View> */}
        </View>

    </>)
}

export default EditAddress