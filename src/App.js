import React from 'react';
import {View} from 'react-native';
import TopNavigations from './components/TopNavigations';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllProjectsScreen from './screens/AllProjects';
import OneProjectScreen from './screens/OneProjects';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View>
            <TopNavigations/>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="AllProjects"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen title name="AllProjects" component={AllProjectsScreen}/>
                    <Stack.Screen name="OneProject" component={OneProjectScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}
