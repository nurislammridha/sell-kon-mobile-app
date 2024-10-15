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

import Slider from '../components/Slider';
import Header from '../components/Header';
import Category from '../components/Category';
import Footer from '../components/Footer';
import HomeProducts from '../components/HomeProducts';
import CategoryProducts from '../components/CategoryProducts';
import AllProducts from '../components/AllProducts';
const Home = () => {
    return (
        <View style={styles.container}>
            {/* header section */}
            <Header />
            <ScrollView>
                {/* banner section */}
                <Slider />
                {/* category section */}
                <Category />
                {/* product section */}
                <HomeProducts title={"Sellkon Mall"} />
                <HomeProducts title={"Trending Product"} />
                <HomeProducts title={"Popular Product"} />
                {/* category product section */}
                <CategoryProducts />
                {/* All products section */}
                <View style={styles.pb}>
                    <AllProducts />
                </View>
            </ScrollView>
            {/* footer section */}
            <Footer />
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
