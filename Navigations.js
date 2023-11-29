import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contacts from './Screens/Contacts'
import Favourite from './Screens/Favourite'
import Recents from './Screens/Recents'


const Navigations = () => {
    const Stack = createNativeStackNavigator()
    return (
        <>
            <Stack.Navigator initialRouteName='favourite'>
                <Stack.Screen name='contacts' component={Contacts} options={{ headerShown: false }} />
                <Stack.Screen name='favourite' component={Favourite} options={{ headerShown: false }} />
                <Stack.Screen name='recents' component={Recents} options={{ headerShown: false }} />
            </Stack.Navigator>

        </>
    )
}

export default Navigations