import React from 'react'
import { Text } from 'react-native'

const PrimaText = ({ color = "#212121", fontSize = 14, fontWeight = "normal", content = "Hello Content", marginTop = 0, backgroundColor = "#FFF" }) => {
    return (
        <Text style={{ color, fontSize, fontWeight, padding: 0, margin: 0, marginTop, backgroundColor }}>{content}</Text>
    )
}

export default PrimaText