import { StackNavigator, TabNavigator } from 'react-navigation';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Home from './screens/Home';

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: 'Sign In'
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign Up'
    }
  }
})

export const SignedIn = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  }
})

