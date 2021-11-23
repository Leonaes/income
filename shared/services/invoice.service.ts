import axiosInstance, { updateAxiosInstanceApi } from './axiosInstance'

import { toasterShowMessage } from '../util/toaster'
import { IInvoice } from '../interfaces/Invoice'

const dbDataLocation = {
	dataSource: 'Teste-01',
	database: 'income',
	collection: 'invoices',
}

export interface IGetInvoicesPayload {
	userId: string
	search?: string
	sortField?: string
	sortDirection?: number
}
export async function getInvoices(
	payload: IGetInvoicesPayload,
): Promise<IInvoice[]> {
	const {
		userId,
		search = '',
		sortField = 'invoiceCode',
		sortDirection = 1,
	} = payload
	updateAxiosInstanceApi()

	const sortBy: any = {}
	sortBy[sortField] = sortDirection

	const response = await axiosInstance.post('/action/find', {
		...dbDataLocation,
		filter: {
			userId: userId,
		},
		sort: sortBy,
	})

	return response.data.documents
}
