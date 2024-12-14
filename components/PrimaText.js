import React from 'react'
import { Text, View } from 'react-native'

const PrimaText = ({
    color = "#212121",
    fontSize = 14,
    fontWeight = "normal",
    content = "Hello Content",
    marginTop = 0,
    backgroundColor = "#FFF",
    style = {},
    isTaka = false
}) => {
    return (
        <Text style={[{ color, fontSize, fontWeight, padding: 0, margin: 0, marginTop, backgroundColor }, style]}>
            {isTaka && <Text>&#2547;</Text>}{content}
        </Text>
    )
}

export default PrimaText