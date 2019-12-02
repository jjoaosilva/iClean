import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/pages/Home'
import Quiz from './src/pages/Quiz'

const AppNavigator = createStackNavigator(
{
  Home: {
    screen: Home,
  },
  Quiz: {
    screen: Quiz,
  },
},
{
  headerMode: 'false',
  navigationOptions: { headerVisible: false },
},
);

export default createAppContainer(AppNavigator);