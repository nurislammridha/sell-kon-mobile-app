import React from 'react'
import filterIcn from '../assets/icons/filter.png'
import select from '../assets/icons/sselected.png'
import unselect from '../assets/icons/sselect.png'
import { Image, StyleSheet, View } from 'react-native'
import PrimaText from './PrimaText'
const styles = StyleSheet.create({
    container: {
        width: '60%',
        padding: 15,
        position: 'absolute',
        top: 70,
        right: 0,
        backgroundColor: "#FFF"
    },
    top: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filImg: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    itemCon: {
        marginTop: 20
    },
    item: {
        marginTop: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemIcn: {
        width: 14,
        height: 14,
        marginRight: 10
    }
})
const Filter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={filterIcn} style={styles.filImg} />
                    <PrimaText
                        content='Filter'
                        fontSize={16}
                        fontWeight='medium'
                    />
                </View>
                <PrimaText
                    content='Close'
                    fontSize={16}
                    fontWeight='medium'
                />
            </View>
            <PrimaText
                content='Categories'
                fontWeight='medium'
                fontSize={20}
                marginTop={40}
            />
            <View style={styles.itemCon}>
                {[1, 2, 3, 4, 5, 5].map((_, index) => (
                    <View style={styles.item} key={index}>
                        <Image source={select} style={styles.itemIcn} />
                        <PrimaText
                            content='Women Pant'
                            fontSize={15}
                        />
                    </View>
                ))}

            </View>
            <PrimaText
                content='Brands'
                fontWeight='medium'
                fontSize={20}
                marginTop={40}
            />
            <View style={styles.itemCon}>
                {[1, 2, 3, 4, 5, 5].map((_, index) => (
                    <View style={styles.item} key={index}>
                        <Image source={select} style={styles.itemIcn} />
                        <PrimaText
                            content='Women Pant'
                            fontSize={15}
                        />
                    </View>
                ))}

            </View>
        </View>
    )
}

export default Filter