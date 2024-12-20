import React, { useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, View } from 'react-native'
import sl1 from '../assets/images/slide1.png'
import sl2 from '../assets/images/slide2.png'
import sl3 from '../assets/images/slide3.png'
import sl4 from '../assets/images/slide4.png'
import SlideItem from './SlideItem'
import Pagination from './Pagination'
const { width: wid } = Dimensions.get('screen')
const info = [{ img: sl1 }, { img: sl2 }, { img: sl3 }, { img: sl4 }]
const Slider = ({ data = info, paginationTop = -34, width = wid, height = 115, isDescriptionPage = false }) => {
    //I follow this video -32
    //https://www.youtube.com/watch?v=2TgArwz6je8
    const [index, setIndex] = useState(0)

    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = event => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX
                    }
                }
            }
        ],
            {
                useNativeDriver: false
            })(event)
    }
    const handelOnViewableItemsChanged = useRef(({ viewableItems }) => {
        setIndex(viewableItems[0].index)
    }).current
    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50
    }).current
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <SlideItem item={item} width={width} height={height} isDescriptionPage={isDescriptionPage} />}
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handelOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={data} scrollX={scrollX} index={index} marginTop={paginationTop} isDescriptionPage={isDescriptionPage} />
        </View>
    )
}

export default Slider