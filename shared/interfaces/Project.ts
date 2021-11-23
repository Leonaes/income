export interface IProject {
	_id?: string // mongo db id
	userId: string
	purchaseOrder: string
	projectId?: string
	name: string
	description?: string
	client: string
	clientManager: string
	serviceType: ServiceTypeEnum
	size: number
	sizeUnit: SizeUnitEnum
	rate: number
	exchangeRate: number
	value: number
	currency: CurrencyEnum
	commitDate: Date
	deliveryDate?: Date
	invoiceId?: string
	paymentDate: Date
	paymentId?: string
	status: ProjectStatusEnum
}

export enum ServiceType {
	TRANSLATION = 'TRANSLATION',
	WRITING = 'WRITING',
	REVIEW = 'REVIEW',
	PROOFREADING = 'PROOFREADING',
	SOFTWARE_DEVELOPMENT = 'SOFTWARE_DEVELOPMENT',
	OTHER = 'OTHER',
}
export type ServiceTypeEnum = keyof typeof ServiceType
export const ServiceTypeValues = [
	'TRANSLATION',
	'WRITING',
	'REVIEW',
	'PROOFREADING',
	'SOFTWARE_DEVELOPMENT',
	'OTHER',
]

export enum SizeUnit {
	STORY_POINTS = 'STORY_POINTS',
	WORDS = 'WORDS',
	PAGES = 'PAGES',
	HOURS = 'HOURS',
}
export type SizeUnitEnum = keyof typeof SizeUnit
export const SizeUnitValues = ['STORY_POINTS', 'WORDS', 'PAGES', 'HOURS']

export enum Currency {
	USD = 'USD',
	EUR = 'EUR',
	BRL = 'BRL',
}
export type CurrencyEnum = keyof typeof Currency
export const CurrencyValues = ['USD', 'EUR', 'BRL']

export enum ProjectStatus {
	COMMITED = 'COMMITED',
	CANCELED = 'CANCELED',
	DELIVERED = 'DELIVERED',
	INVOICED = 'INVOICED',
	PAID = 'PAID',
	UNPAID = 'UNPAID',
	DELETED = 'DELETED',
}
export type ProjectStatusEnum = keyof typeof ProjectStatus
export const ProjectStatusValues = [
	'COMMITED',
	'CANCELED',
	'DELIVERED',
	'INVOICED',
	'PAID',
	'UNPAID',
	'DELETED',
]
