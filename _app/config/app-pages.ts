

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from './app-routes';

const RootStack = createNativeStackNavigator({
    screens: AppRoutes,
});

const AppNavigation = createStaticNavigation(RootStack);

export default AppNavigation;
