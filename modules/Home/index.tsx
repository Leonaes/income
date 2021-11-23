import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { APP_TEXT } from '../../shared/util/appText'
import ButtonPrimary from '../../shared/components/ButtonPrimary'
import ScreenWrapper from '../ScreenWrapper'
import { routesEnum } from '../../App'
import {
	EmptySpace12,
	EmptySpace24,
	HomeContainerWrapper,
	HomeWrapper,
} from './styles'

function Home(): JSX.Element {
	const navigation = useNavigation()

	function goToInvoices() {
		navigation.navigate(routesEnum.INVOICES)
	}

	function goToLogin() {
		navigation.goBack()
	}

	return (
		<HomeContainerWrapper>
			<ScreenWrapper useScrollView={true}>
				<HomeWrapper>
					<EmptySpace12 />
					<ButtonPrimary
						onPress={goToInvoices}
						disabled={false}
						isLoading={false}
					>
						{APP_TEXT.HOME_INVOICES_BUTTON}
					</ButtonPrimary>
					<EmptySpace24 />
					<ButtonPrimary onPress={goToLogin} disabled={false} isLoading={false}>
						{APP_TEXT.HOME_LOGIN_BUTTON}
					</ButtonPrimary>
				</HomeWrapper>
			</ScreenWrapper>
		</HomeContainerWrapper>
	)
}

export default Home
