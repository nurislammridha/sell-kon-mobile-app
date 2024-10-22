import React from 'react'
import { StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import PlusMinus from './PlusMinus'
const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  price: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  }
})
const DetailsBody = () => {
  return (
    <View style={styles.container}>
      <PrimaText
        fontSize={21}
        fontWeight='medium'
        content='Yamaha YZF R!5 V3 indonesian'
      />
      <PrimaText
        fontSize={14}
        fontWeight='medium'
        content='Brand: Yamaha'
        marginTop={10}
      />
      <PrimaText
        fontSize={14}
        fontWeight='medium'
        content='Sold By: Yamaha Official'
        marginTop={10}
      />
      <View style={styles.price}>
        <View>
          <PrimaText
            fontSize={16}
            color='#878787'
            content='&#2547; 450000'
            style={{ textDecorationLine: 'line-through' }}
          />
          <PrimaText
            fontSize={20}
            fontWeight='bold'
            color='#F54C54'
            content='&#2547; 4500000'
            marginTop={10}
          />
        </View>
        <PlusMinus />
      </View>
    </View>
  )
}

export default DetailsBody