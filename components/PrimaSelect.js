import React, { useCallback, useState } from 'react'
import { FlatList, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import search from '../assets/icons/search.png'
const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: "#C9C9C9",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#FFF"
    },
    input: {
        borderWidth: 0,
        width: "auto",
        height: "100%",
        margin: 0,
        padding: 0,
        color: "#7C7C7C",
        fontSize: 16,

    },
    img: {
        width: 18,
        height: 18,
        marginRight: 10
    }
})
const PrimaSelect = ({ leftIcon = false, width = 265, height = 45, placeholder = "Enter", backgroundColor = "#FFF", marginTop = 0, type }) => {
    const [userinput, setUserinput] = useState(null);
    const [show, setShow] = useState(false);
    const openPicker = useCallback(
        () => {
            Keyboard.dismiss()
            setShow(true)
        },
        [show]
    );

    const hidePicker = useCallback(
        (item) => {
            setShow(false)
            setUserinput(item)
        },
        [show, userinput]
    );
    // <View style={{ ...styles.container, width, height, backgroundColor, marginTop }}>
    return (
        <View style={{ width: '30%' }}>
            <TextInput
                label={'Title'}
                placeholder={show ? '' : 'Mr'}
                value={userinput}
                style={{ width: '100%' }}
                onChangeText={(text) => setUserinput(text)}

            // right={<TextInput.Icon onPress={openPicker} icon="chevron-down" size={20} />}
            />
            {show ?
                <FlatList
                    style={{ backgroundColor: 'rgb(211, 211, 211)', elevation: 1, zIndex: 22, width: '100%', marginTop: 60, position: 'absolute' }}
                    data={['Mr', 'Mrs', 'Miss']}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => hidePicker(item)}>
                            <Text style={{ padding: 8 }}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                />
                : null}
        </View>
    )
}

export default PrimaSelect