import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRoutes} from './app-routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createNativeStackNavigator({
  screens: AppRoutes,
  initialRouteName: '/auth-signin',
});

export type RootStackParamList = StaticParamList<typeof RootStack>;

const AppNavigation = createStaticNavigation(RootStack);

export default AppNavigation;
