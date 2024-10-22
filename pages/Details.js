import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import SecondaryHeader from '../components/SecondaryHeader'
import share from '../assets/icons/share_icon.png'
import Slider from '../components/Slider'
import pro from '../assets/images/pro3.jpg'
import DetailsBody from '../components/DetailsBody'
const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        width: "100%",
        backgroundColor: "#FFF"
    }
})
const Details = () => {
    return (
        <View style={styles.container}>
            <SecondaryHeader icon={share} />
            <ScrollView>
                <View>
                    <Slider
                        paginationTop={0}
                        data={[{ img: pro }, { img: pro }, { img: pro }, { img: pro }]}
                        isDescriptionPage
                        height={254}
                    />
                </View>
                <DetailsBody />
            </ScrollView>
        </View>
    )
}

export default Details