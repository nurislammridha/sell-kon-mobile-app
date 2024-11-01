import React, { useState } from 'react'
import { View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const PrimaSelect = ({ marginTop = 0, paddingBottom = 0, items = [], setItems, value = [], setValue, width = "100%" }) => {
    const [open, setOpen] = useState(false);
    // const [value, setValue] = useState([]);
    // const [items, setItems] = useState([
    //     { label: 'Spain', value: 'spain' },
    //     { label: 'Madrid', value: 'madrid' },
    //     { label: 'Barcelona', value: 'barcelona' },
    //     { label: 'Russia', value: 'russia' },
    //     { label: 'Italy', value: 'italy' },
    //     { label: 'Rome', value: 'rome' },
    //     { label: 'Finland', value: 'finland' }
    // ]);
    return (
        <View style={{
            marginTop,
            paddingBottom,
            width
        }}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={false}
            />
        </View>
    )
}

export default PrimaSelect