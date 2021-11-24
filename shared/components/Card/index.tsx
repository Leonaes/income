import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { routesEnum } from '../../../App'
function Card() {

    function invoiceNow() {

        const navigation = useNavigation()

		navigation.navigate(routesEnum.INVOICES)
	}

    return(

        

        <TouchableOpacity
            style={{ width: '100%' }}
			activeOpacity={1}
            onPress={invoiceNow}
        >
            <View style={styles.container}>
                <View style={styles.invoiceInfo}>
                    <Text>Data </Text>
                    <Text> InvoiceCode</Text>
                </View>
                <View style={styles.invoicePayDay}>
                    <Text>15 days </Text>
                    <Text> InvoicePorcent</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        paddingTop: 20,
        paddingBottom: 20,
        width: 280,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
    },
    invoiceInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    invoicePayDay: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
    },
})

export default Card;