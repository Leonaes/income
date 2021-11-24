import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { useTypedSelector } from '../../shared/hooks/useTypedSelector'
import Loading from '../../shared/components/Loading'
import { IInvoice } from '../../shared/interfaces/Invoice'
import { getInvoices } from '../../shared/services/invoice.service'
import ScreenWrapper from '../ScreenWrapper'
import { InvoicesContainerWrapper, InvoicesWrapper } from './styles'
import { FlatList } from 'react-native-gesture-handler'
import InputSearch from '../../shared/components/InputSearch'

import Card from '../../shared/components/Card'




function Invoices(): JSX.Element {
	const { user } = useTypedSelector(['user'])

	const [isLoading, setLoading] = useState(false)
	const [invoices, setInvoices] = useState<IInvoice[]>([])

	async function loadInvoices() {
		try {
			setLoading(true)
			const response = await getInvoices({ userId: user._id })
			setInvoices(response)
		} catch (error) {
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		loadInvoices()
	}, [])

	function renderInvoices(): JSX.Element {
		return (
			<InvoicesWrapper>
				<InputSearch label="Search invoce"/>
				{invoices.length > 0 ? (
					<FlatList
						data={invoices}
						renderItem={({ item }) => <View><Text>{item.invoiceCode}</Text></View>}
						keyExtractor={(invoice) => invoice._id}
					/>
				) : (
					<Text>No Invoices Found</Text>
				)}
				<Card />
			</InvoicesWrapper>
		)
	}

	return (
		<InvoicesContainerWrapper>
			<ScreenWrapper useScrollView={true}>
				{isLoading ? <Loading /> : renderInvoices()}
			</ScreenWrapper>
		</InvoicesContainerWrapper>
	)
}

export default Invoices
