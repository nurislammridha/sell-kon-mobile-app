import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import filter from '../assets/icons/filter.png'
import Product from '../components/Product'
import ProductCart from '../components/ProductCart'
import ShopAddress from '../components/ShopAddress'
import MyButton from '../components/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { GetBrands, GetCategories, GetFilterProduct, GetSellerById } from '../redux/_redux/CommonAction'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FAFAFA",
        paddingBottom: 65
    },
    proRel: {
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 8,
        backgroundColor: "#FFF",

    },
    products: {
        display: "flex",
        flexDirection: "row",
        overflow: "scroll",
        marginTop: 14,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
})
const ShopPage = ({ navigation, route, search = "" }) => {
    const { width } = Dimensions.get('screen')
    const { id } = route.params;
    const dispatch = useDispatch()
    const sellerDetails = useSelector((state) => state.homeInfo.sellerDetails);
    const proInfo = useSelector((state) => state.homeInfo.productsList);
    const { pagination, products } = proInfo || {}
    const { shopLogo, shopName } = sellerDetails || {}
    const [isShortBy, setShortBy] = useState(false)
    const [short, setShort] = useState(0)
    const [shortName, setShortName] = useState("Select")
    const [categoriesId, setCategoriesId] = useState([])
    const [brandsId, setBrandsId] = useState([])
    const [isClose, setClose] = useState(false)
    useEffect(() => {
        // dispatch(GetCategories())
        // dispatch(GetBrands())
        dispatch(GetSellerById(id))
    }, [id])
    useEffect(() => {
        dispatch(GetFilterProduct({ categoriesId, brandsId, sellersId: [id], isShortBy, short, search, page: 1, limit: 20 }))
    }, [categoriesId, brandsId, short, id, search])
    // console.log('proInfo', pagination)
    return (
        <View style={styles.container}>
            <SecondaryHeader
                icon={filter}
                isMiddle
                content='Shop'
                navigation={navigation}
            />
            <ScrollView>
                <View style={styles.proRel}>
                    <ShopAddress data={sellerDetails} />
                </View>
                <View style={styles.proRel}>
                    <View style={styles.products}>
                        {products?.length && products.map((item, indx) => (
                            <TouchableOpacity key={indx} onPress={() => navigation.navigate("Details", { id: item?._id })}>
                                <ProductCart marginTop={16} width={(width / 2) - 23} data={item} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <MyButton
                    marginTop={10}
                    content='View more product'
                    width={"100%"}
                    borderWidth={1}
                />
            </ScrollView>

        </View>
    )
}

export default ShopPage