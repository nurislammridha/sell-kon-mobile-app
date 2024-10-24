import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import share from '../assets/icons/share_icon.png'
import Slider from '../components/Slider'
import pro from '../assets/images/pro3.jpg'
import DetailsBody from '../components/DetailsBody'
import PrimaText from '../components/PrimaText'
import Product from '../components/Product'
import cart from '../assets/icons/cart_icon_select.png'
import IconButton from '../components/IconButton'
import MyButton from '../components/MyButton'
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
const Details = () => {
    const { width } = Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <SecondaryHeader icon={share} />
            <ScrollView>
                <View style={styles.slider}>
                    <Slider
                        paginationTop={0}
                        data={[{ img: pro }, { img: pro }, { img: pro }, { img: pro }]}
                        isDescriptionPage
                        height={254}
                    />
                </View>
                <DetailsBody />
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
                            <Product marginTop={16} width={(width / 2) - 30} />
                        ))}
                    </View>
                </View>

            </ScrollView>
            <View style={styles.footer}>
                <IconButton
                    backgroundColor='#000'
                    icon={cart}
                    width={88}
                    height={44}
                    imgWidth={24}
                    imgHeight={24}
                />
                <MyButton
                    content='Buy Now'
                    width={width - 140}
                    height={44}
                    backgroundColor='#FF2C7A'
                />
            </View>
        </View>
    )
}

export default Details