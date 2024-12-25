import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
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
const DetailsBody = ({ data = {}, activeIndex = 0, setActiveIndex }) => {
  const { productImgColor, mrp, regularDiscount, campaignDiscount, brandName, productName, isCampaign } = data || {}
  const [quantity, setQuantity] = useState(1)
  const handlePlus = () => {

    setQuantity(quantity < 4 ? quantity + 1 : 5)
  }
  const handleMinus = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0)
  }
  const handleColor = (index) => {
    setActiveIndex(index)
    // console.log('index', index)
  }
  console.log('activeIndx', activeIndex)
  return (
    <View style={styles.container}>
      <PrimaText
        fontSize={21}
        fontWeight='medium'
        content={productName || "Test"}
      />
      <PrimaText
        fontSize={14}
        fontWeight='medium'
        content={"Brand :" + brandName}
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
            isTaka={true}
            content={`${mrp}`}
            style={{ textDecorationLine: 'line-through' }}
          />
          <PrimaText
            fontSize={20}
            fontWeight='bold'
            color='#F54C54'
            isTaka
            content={`${isCampaign ? campaignDiscount : regularDiscount}`}
            marginTop={0}
          />
        </View>
        <PlusMinus
          width={106}
          height={32}
          btnWidth={32}
          btnHeight={32}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
          quantity={quantity}
        />
      </View>
      <View style={styles.colorsCon}>
        <PrimaText
          fontSize={14}
          content='Colors'
          color='#7D7D7D'
        />
        <View style={styles.colors}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {productImgColor?.map((item, index) => (
              item?.colorName.length > 0 && <MyButton
                key={index}
                borderWidth={1}
                borderColor={activeIndex === index ? "#f54c54" : "#E8E8E8"} //
                color="#000"
                content={item?.colorName}
                width={'auto'}
                height={32}
                marginRight={8}
                onPress={() => handleColor(index)}
              />

            ))}
          </ScrollView>

        </View>
      </View>
      <PrimaText fontSize={14} marginTop={14} content='Have any question? Please contact us.' />
      <PrimaText fontSize={14} content='01784528799' />
    </View>
  )
}

export default DetailsBody