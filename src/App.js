import React from 'react';
import AllProjectsScreen from './screens/AllProjects';
import OneProjectScreen from './screens/OneProjects';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import headerOptions from './components/headerOptions';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="OneProject">
                <Drawer.Screen name="AllProjects" component={AllProjectsScreen} options={headerOptions} />
                <Drawer.Screen name="OneProject" component={OneProjectScreen} options={headerOptions} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
