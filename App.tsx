import React from 'react'
import { Platform } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RootSiblingParent } from 'react-native-root-siblings'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { store, persistor } from './shared/store'
import { navigationRef } from './shared/util/navigationRoot'
import Login from './modules/Login'
import CreateAccount from './modules/CreateAccount'
import CreateAccountSuccess from './modules/CreateAccountSuccess'
import Home from './modules/Home'
import Invoices from './modules/Invoices'

export const routesEnum = {
	LOGIN: 'Login',
	CREATE_ACCOUNT: 'Create Account',
	CREATE_ACCOUNT_SUCCESS: 'Your account was created successfuly',
	HOME: 'Home',
	INVOICES: 'Invoices',
}

const Stack = createStackNavigator()

const App = () => {
	// fixer https://github.com/magicismight/react-native-root-siblings/issues/62
	const Wrapper = Platform.OS === 'ios' ? React.Fragment : RootSiblingParent

	return (
		<Wrapper>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<NavigationContainer ref={navigationRef}>
						<Stack.Navigator initialRouteName={routesEnum.LOGIN}>
							<Stack.Screen name={routesEnum.LOGIN} component={Login} />
							<Stack.Screen
								name={routesEnum.CREATE_ACCOUNT}
								component={CreateAccount}
							/>
							<Stack.Screen
								name={routesEnum.CREATE_ACCOUNT_SUCCESS}
								component={CreateAccountSuccess}
							/>
							<Stack.Screen name={routesEnum.HOME} component={Home} />
							<Stack.Screen name={routesEnum.INVOICES} component={Invoices} />
						</Stack.Navigator>
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</Wrapper>
	)
}

export default App
