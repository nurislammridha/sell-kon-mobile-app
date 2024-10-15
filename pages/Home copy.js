/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import logo from '../assets/images/logoMobile.png'
import search from '../assets/icons/search.png'
import notification from '../assets/icons/notification.png'
import category from '../assets/icons/mobileCategory.png'
import campaign from '../assets/icons/mobileCampaign.png'
import order from '../assets/icons/mobileOrder.png'
import wish from '../assets/icons/mobileWish.png'
import pro from '../assets/images/pro3.jpg'
import cartIcon from '../assets/icons/cartFooter.png'
import homeIcon from '../assets/icons/home11.png'
import campaignIcon from '../assets/icons/campaign11.png'
import userLogo from '../assets/icons/userIcon.png'
import Slider from '../components/Slider';
const Home = () => {
    return (
        <ScrollView >
            <View style={styles.container}>
                {/* header section */}
                <View style={styles.header}>
                    <View>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.headerIcon}>
                        <Image source={search} style={styles.headerImg} />
                        <View style={styles.notification}>
                            <Image source={notification} style={styles.headerImg} />
                            <Text style={styles.badge}>2</Text>
                        </View>
                    </View>
                </View>
                {/* banner section */}
                <View >
                    <Slider />
                </View>
                {/* category section */}
                <View style={styles.category}>
                    <View style={styles.catItem}>
                        <Image source={category} style={styles.catImg} />
                        <Text style={styles.catText}>Categories</Text>
                    </View>
                    <View style={styles.catItem}>
                        <Image source={campaign} style={styles.catImg} />
                        <Text style={styles.catText}>Campaigns</Text>
                    </View>
                    <View style={styles.catItem}>
                        <Image source={order} style={styles.catImg} />
                        <Text style={styles.catText}>Order</Text>
                    </View>
                    <View style={styles.catItem}>
                        <Image source={wish} style={styles.catImg} />
                        <Text style={styles.catText}>Wishlist</Text>
                    </View>
                </View>
                {/* product section */}
                <View style={styles.productsCon}>
                    <Text style={styles.proTitle}>Sllkon Mall</Text>
                    <View style={styles.products}>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.productsCon}>
                    <Text style={styles.proTitle}>Trending Product</Text>
                    <View style={styles.products}>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.productsCon}>
                    <Text style={styles.proTitle}>Popular Product</Text>
                    <View style={styles.products}>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                    </View>
                </View>
                {/* category product section */}
                <View style={styles.productsCon}>
                    <View style={styles.catTop}>
                        <Text style={styles.proTitle}>Categories</Text>
                        <View style={styles.viewAll}>
                            <Text style={styles.viewAllText}>View All</Text>
                        </View>
                    </View>
                    <View style={styles.products}>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                        </View>
                        <View style={styles.product}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.proImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                        </View>
                    </View>
                </View>
                {/* All products section */}
                <View style={styles.productsCon}>
                    <Text style={styles.proTitle}>All Product</Text>
                    <View style={styles.allProducts}>
                        <View style={styles.allProduct}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.allProImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.allProduct}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.allProImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.allProduct}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.allProImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                        <View style={styles.allProduct}>
                            <View style={styles.proCon}>
                                <Image source={pro} style={styles.allProImg} />
                            </View>
                            <Text style={styles.proName}>Hynduai sontana 2020 car rtret ertret rtret tret</Text>
                            <Text style={styles.del}>&#2547; 45,00,000</Text>
                            <Text style={styles.price}>&#2547; 45,00,000</Text>
                        </View>
                    </View>
                </View>
                {/* footer section */}
                <View style={styles.footerCon}>
                    <View style={styles.footItem}>
                        <Image source={homeIcon} style={styles.footImg} />
                        <Text style={styles.footText}>HOME</Text>
                    </View>
                    <View style={styles.footItem}>
                        <Image source={campaignIcon} style={styles.footImg} />
                        <Text style={styles.footText}>UTSHOB</Text>
                    </View>
                    <View style={styles.footItem}>
                        <Image source={cartIcon} style={styles.footImg} />
                        <Text style={styles.footText}>CART</Text>
                    </View>
                    <View style={styles.footItem}>
                        <Image source={userLogo} style={styles.footImg} />
                        <Text style={styles.footText}>Profile</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        // backgroundColor: "#F00"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 23,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#FFF"
    },
    logo: {
        width: 104,
        height: 24
    },
    headerIcon: {
        display: "flex",
        flexDirection: "row",
    },
    headerImg: {
        height: 24,
        width: 24,
        marginLeft: 10
    },
    notification: {
        position: "relative",
    },
    badge: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: "#CC0000",
        color: "#FFF",
        textAlign: "center",
        fontSize: 10,
        position: "absolute",
        top: -5,
        right: 0
    },
    category: {
        paddingTop: 16,
        paddingBottom: 12,
        paddingLeft: 22,
        paddingRight: 22,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    catImg: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    catItem: {
        display: "flex",
        alignItems: "center"
    },
    catText: {
        marginTop: 5,
        fontSize: 13
    },
    productsCon: {
        marginTop: 10,
        paddingBottom: 12,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: "#FFF",
    },
    proTitle: {
        marginTop: 14,
        fontSize: 16,
        fontWeight: "800"
    },
    products: {
        marginTop: 14,
        display: "flex",
        flexDirection: "row",
        overflow: "scroll",
    },
    proImg: {
        width: 65,
        height: 65
    },
    product: {
        width: 110,
        height: 178,
        marginRight: 14,
        borderRadius: 5,
        padding: 5,
        borderColor: "#FAFAFA",
        borderWidth: 1
    },
    proCon: {
        display: "flex",
        alignItems: "center"
    },
    proName: {
        marginTop: 10,
        minHeight: 45,
        fontSize: 12,
        fontWeight: '500',
    },
    del: {
        marginTop: 7,
        fontSize: 8,
        color: "#878787",
        textDecorationLine: "line-through"
    },
    price: {
        marginTop: 5,
        fontSize: 12,
        color: "#F54C54"
    },
    catTop: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    proTitle: {
        fontSize: 16,
        fontWeight: "800"
    },
    viewAll: {
        with: 77,
        height: 29,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: "#FAFAFA",
        borderWidth: 1,
    },
    viewAllText: {
        fontSize: 14,
    },
    allProducts: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    allProduct: {
        marginTop: 10,
        width: 190,
        height: 220,
        marginRight: 14,
        borderRadius: 5,
        padding: 5,
        borderColor: "#FAFAFA",
        borderWidth: 1,
    },
    allProImg: {
        width: 100,
        height: 100
    },
    footerCon: {
        marginTop: 14,
        backgroundColor: "#FFF",
        height: 76,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        // left: 0,
        bottom: 0,
        width: "100%"
    },
    footItem: {
        width: 40,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between'
    },
    footImg: {
        height: 32,
        width: 32
    },
    footText: {
        fontSize: 10
    },
});

export default Home;
