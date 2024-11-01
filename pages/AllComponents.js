import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import SelectedProducts from '../components/SelectedProducts'
import FullWidthButton from '../components/FullWidthButton'
import MyButton from '../components/MyButton'
import Product from '../components/Product'
import PrimaText from '../components/PrimaText'
import PrimaInput from '../components/PrimaInput'
import OrderSummary from '../components/OrderSummary'
import AddressOrder from '../components/AddressOrder'
import SecondaryHeader from '../components/SecondaryHeader'
import SelectProducts from '../components/SelectProducts'
import PlusMinus from '../components/PlusMinus'
import PaymentCard from '../components/PaymentCard'
import CreditDebit from '../components/CreditDebit'
import IconButton from '../components/IconButton'
import Tab from '../components/Tab'
import OrderList from '../components/OrderList'
import OrderTimeLine from '../components/OrderTimeLine'
import Slider from '../components/Slider'
import PrimaSelect from '../components/PrimaSelect'

const AllComponents = () => {
    return (
        <ScrollView>
            {/* <View style={styles.container}>
                <Slider />
            </View> */}
            {/* <View style={styles.container}>
                <OrderTimeLine />
            </View>
            <View style={styles.container}>
                <OrderList />
            </View>
            <View style={styles.container}>
                <Tab />
            </View>
            <View style={styles.container}>
                <IconButton />
            </View>
            <View style={styles.container}>
                <CreditDebit />
            </View>
            <View style={styles.container}>
                <PaymentCard />
            </View>
            <View style={styles.container}>
                <SelectedProducts />
            </View>
            <View style={styles.container}>
                <FullWidthButton />
            </View>
            <View style={styles.container}>
                <MyButton width={200} />
            </View>
            <View style={styles.container}>
                <Product />
            </View>
            <View style={styles.container}>
                <PrimaText />
            </View>
            <View style={styles.container}>
                <PrimaInput />
            </View>
            <View style={styles.container}>
                <OrderSummary
                    isPromo={true}
                />
            </View>
            <View style={styles.container}>
                <AddressOrder />
            </View>
            <View style={styles.container}>
                <SecondaryHeader />
            </View>
            <View style={styles.container}>
                <SelectProducts />
            </View> */}
            <View style={styles.container}>
                <PlusMinus />
            </View>
            <View style={styles.container}>
                <PrimaSelect />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 30,
        display: 'flex',
        alignItems: 'center'
    }
})
export default AllComponents