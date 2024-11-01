import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import select from '../assets/icons/sselected.png'
import unselect from '../assets/icons/sselect.png'
import PrimaText from './PrimaText';
const styles = StyleSheet.create({
    img: {
        height: 16,
        width: 16,
        marginRight: 8
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flexDirection: 'row'
    },
    item: {
        marginRight: 20
    }
});
const AddressRadio = ({ marginTop = 0 }) => {
    const [checked, setChecked] = useState(0)
    const radioBtnsData = ['Metropolitan City', 'Outside Town']
    return (
        <View style={[styles.container, { marginTop }]}>
            {radioBtnsData.map((data, key) => (
                <View key={key} style={styles.item}>
                    {checked == key ?
                        <TouchableOpacity style={styles.btn}>
                            <Image style={styles.img} source={select} />
                            <PrimaText
                                content={data}
                                fontSize={14}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setChecked(key) }} style={styles.btn}>
                            <Image style={styles.img} source={unselect} />
                            <PrimaText
                                content={data}
                                fontSize={14}
                            />
                        </TouchableOpacity>
                    }
                </View>
            )
            )}
        </View>
    )
}

export default AddressRadio