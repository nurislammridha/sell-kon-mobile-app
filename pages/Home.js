/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
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

import Slider from '../components/Slider';
import Header from '../components/Header';
import Category from '../components/Category';
import Footer from '../components/Footer';
import HomeProducts from '../components/HomeProducts';
import CategoryProducts from '../components/CategoryProducts';
import AllProducts from '../components/AllProducts';
import { useSelector, useDispatch } from 'react-redux';
import { GetHomePageData } from '../redux/_redux/CommonAction';
const Home = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const isHomePageLoading = useSelector((state) => state.homeInfo.isHomePageLoading);
    const homeDataList = useSelector((state) => state.homeInfo.homeData);
    const { categoriesList, data, popularProducts,
        sellKonMallProducts, shopsList, trendingProducts, subCategoriesList, campaign, eidCampaign } = homeDataList || {}
    // console.log('homeDataList', homeDataList)
    useEffect(() => {
        dispatch(GetHomePageData());
    }, [])
    return (
        <View style={styles.container}>
            {/* header section */}
            <Header navigation={navigation} />
            <ScrollView>
                {/* banner section */}
                <Slider />
                {/* category section */}
                <Category />
                {/* product section */}
                <HomeProducts
                    title={"Sellkon Mall"}
                    navigation={navigation}
                    route={route}
                    arr={sellKonMallProducts}
                    loading={isHomePageLoading}
                />
                {/* <HomeProducts title={"Trending Product"} navigation={navigation} route={route} /> */}
                {/* <HomeProducts title={"Popular Product"} navigation={navigation} route={route} /> */}
                {/* category product section */}
                <CategoryProducts content="Our Shops" navigation={navigation} url={"Shop"} />
                {/* category product section */}
                <CategoryProducts content='Categories' navigation={navigation} url="Home" />
                {/* All products section */}
                <View style={styles.pb}>
                    <AllProducts navigation={navigation} />
                </View>
            </ScrollView>
            {/* footer section */}
            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
    },
    pb: {
        paddingBottom: 210
    }


});

export default Home;
