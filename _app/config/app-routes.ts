import AuthSignin from '../_modules/auth_signin';
import Home from '../_modules/home';

export const AppRoutes = {
  '/auth-signin': {
    screen: AuthSignin,
    options: {
      headerShown: false,
    },
  },
  '/home': {
    screen: Home,
    options: {
      headerShown: false,
    },
  },
};
