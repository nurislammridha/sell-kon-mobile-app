import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import pro from '../assets/images/pro3.jpg'
import sl from '../assets/images/slide1.png'
const { width } = Dimensions.get('window');

const Carousel = ({ images, setActiveIndex, activeIndex = 0 }) => {

    const flatListRef = useRef(null);

    // const images = [
    //     pro, pro, pro,
    // ];
    // const images = [
    //     'https://picsum.photos',
    //     'https://picsum.photos',
    //     'https://picsum.photos',
    // ];
    // const images = [
    //     // require('../assets/images/slide1.png'),
    //     // require('../assets/images/slide2.png'),
    //     require('../assets/images/pro3.jpg'),
    //     require('../assets/images/pro3.jpg'),
    //     require('../assets/images/pro3.jpg'),
    // ];
    const onScroll = (event) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(slideIndex);
    };

    const goToSlide = (index) => {
        flatListRef.current.scrollToOffset({ offset: index * width, animated: true });
        setActiveIndex(index);
    };

    const renderPagination = () => {
        return (
            <View style={styles.pagination}>
                {images?.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.dot, activeIndex === index && styles.activeDot]}
                        onPress={() => goToSlide(index)}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScroll}
                renderItem={({ item }) => (
                    <Image source={{ uri: item?.url }} style={styles.image} />
                )}
            />
            {/* <Image source={pro} style={styles.image} resizeMode="cover" /> */}
            {renderPagination()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ddd'
    },
    image: {
        width: width,
        height: width,
        // backgroundColor: 'red'
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#000',
    },
});

export default Carousel;
