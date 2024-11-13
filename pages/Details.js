import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import share from '../assets/icons/share_icon.png'
import Slider from '../components/Slider'
import pro from '../assets/images/pro3.jpg'
import DetailsBody from '../components/DetailsBody'
import PrimaText from '../components/PrimaText'
import Product from '../components/Product'
import cart from '../assets/icons/cartDetails.png'
import IconButton from '../components/IconButton'
import MyButton from '../components/MyButton'
import SoldBy from '../components/SoldBy'
const styles = StyleSheet.create({
    container: {
        // paddingTop: 16,
        width: "100%",
        backgroundColor: "#FAFAFA"
    },
    slider: {
        backgroundColor: "#FFF"
    },
    proDeatils: {
        padding: 16,
        marginTop: 8,
        backgroundColor: "#FFF"
    },
    proRel: {
        padding: 16,
        marginTop: 8,
        backgroundColor: "#FFF",

    },
    products: {
        display: "flex",
        flexDirection: "row",
        overflow: "scroll",
        marginTop: 14,
        marginBottom: 150,
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        // backgroundColor: "#888",
        position: 'absolute',
        bottom: 56,
        height: 60,
        alignItems: 'center',
        width: "100%"
    }
})
const Details = ({ navigation, route }) => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader icon={share} navigation={navigation} />
            <ScrollView>
                <View style={styles.slider}>
                    <Slider
                        paginationTop={-20}
                        data={[{ img: pro }, { img: pro }, { img: pro }, { img: pro }]}
                        isDescriptionPage
                        // height={254}
                        height={width}
                    />
                </View>
                <DetailsBody />
                <View style={styles.proDeatils}>
                    <SoldBy navigation={navigation} />
                </View>
                <View style={styles.proDeatils}>
                    <PrimaText
                        fontSize={18}
                        fontWeight='bold'
                        content='Descriptions'
                    />
                </View>
                <View style={styles.proDeatils}>
                    <PrimaText
                        fontSize={18}
                        fontWeight='bold'
                        content='Product Details'
                    />
                </View>
                <View style={styles.proRel}>
                    <PrimaText
                        fontSize={18}
                        fontWeight='bold'
                        content='Related Product'
                    />
                    <View style={styles.products}>
                        {[1, 2, 3, 4, 4, 5, 4].map((_, indx) => (
                            <Product
                                marginTop={16}
                                width={(width / 2) - 23}
                                height={"auto"}
                                imgWidth={"100%"}
                                imgHeight={(width / 2) - 23}
                                navigation={navigation} />
                        ))}
                    </View>
                </View>

            </ScrollView>
            <View style={styles.footer}>
                <IconButton
                    backgroundColor='#000'
                    icon={cart}
                    width={88}
                    height={45}
                    imgWidth={24}
                    imgHeight={24}
                />
                <MyButton
                    navigation={navigation}
                    content='Buy Now'
                    width={width - 130}
                    height={45}
                    backgroundColor='#ff9e28'
                    url='Order'
                    color='#FFF'
                    fontSize={16}
                />
            </View>
        </View>
    )
}

export default Details