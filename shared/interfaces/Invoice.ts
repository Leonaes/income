import { CurrencyEnum, IProject } from './Project'

export interface IInvoice {
	_id?: string
	userId: string
	invoiceCode: string
	client: string
	clientFinancialManager: string
	clientEmail: string[]
	value: number
	currency: CurrencyEnum
	date: Date
	paymentPercent: number
	projectsIds: IProject[] | string[]
	status: InvoiceStatusEnum
}

export enum InvoiceStatus {
	SENT = 'SENT',
	CANCELED = 'CANCELED',
	PARTIALY_PAID = 'PARTIALY_PAID',
	FULLY_PAID = 'FULLY_PAID',
	DELETED = 'DELETED',
}
export type InvoiceStatusEnum = keyof typeof InvoiceStatus
export const InvoiceStatusValues = [
	'SENT',
	'CANCELED',
	'PARTIALY_PAID',
	'FULLY_PAID',
	'DELETED',
]
