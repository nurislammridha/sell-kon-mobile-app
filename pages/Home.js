/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import { getData, storeData } from '../assets/function/helperFunction';
const Home = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const isHomePageLoading = useSelector((state) => state.homeInfo.isHomePageLoading);
    const homeDataList = useSelector((state) => state.homeInfo.homeData);
    const { categoriesList, data, popularProducts,
        sellKonMallProducts, shopsList, trendingProducts, subCategoriesList, campaign, eidCampaign } = homeDataList || {}
    // console.log('homeDataList', homeDataList)
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        dispatch(GetHomePageData());
        getData('isLogin').then((res) => {
            console.log('res', res)
            setIsLogin(res ? true : false)
        })
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
                <HomeProducts
                    title={"Trending Product"}
                    navigation={navigation}
                    route={route}
                    arr={trendingProducts}
                    loading={isHomePageLoading}
                />
                <HomeProducts
                    title={"Popular Product"}
                    navigation={navigation}
                    route={route}
                    arr={popularProducts}
                    loading={isHomePageLoading}
                />
                {/* Shop product section */}
                {!isHomePageLoading &&
                    <CategoryProducts
                        content="Our Shops"
                        navigation={navigation}
                        url={"Shop"}
                        arr={shopsList}
                    />
                }

                {/* category product section */}
                {!isHomePageLoading &&
                    <CategoryProducts
                        content='Categories'
                        navigation={navigation}
                        url="Home"
                        arr={categoriesList}
                        isCat={true}
                    />
                }

                {/* All products section */}
                <View style={styles.pb}>
                    {!isHomePageLoading &&
                        <AllProducts
                            navigation={navigation}
                            arr={data}
                        />
                    }
                </View>
            </ScrollView>
            {/* footer section */}
            <Footer navigation={navigation} isLogin={isLogin} />
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
