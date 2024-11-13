import React from 'react'
import { StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
import PlusMinus from './PlusMinus'
import MyButton from './MyButton'
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF'
  },
  price: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20
  },
  colorsCon: {
    marginTop: 20
  },
  colors: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row'
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
      {/* <PrimaText
        fontSize={14}
        fontWeight='medium'
        content='Sold By: Yamaha Official'
        marginTop={10}
      /> */}
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
            marginTop={0}
          />
        </View>
        <PlusMinus
          width={106}
          height={32}
          btnWidth={32}
          btnHeight={32}
        />
      </View>
      <View style={styles.colorsCon}>
        <PrimaText
          fontSize={14}
          content='Colors'
          color='#7D7D7D'
        />
        <View style={styles.colors}>
          {["Black", "Red", "White"].map((item, index) => (
            <MyButton
              key={index}
              borderWidth={1}
              borderColor="#E8E8E8"
              color="#000"
              content={item}
              width={80}
              height={32}
              marginRight={8}
            />

          ))}
        </View>
      </View>
      <PrimaText fontSize={14} marginTop={14} content='Have any question? Please contact us.' />
      <PrimaText fontSize={14} content='01784528799' />
    </View>
  )
}

export default DetailsBody