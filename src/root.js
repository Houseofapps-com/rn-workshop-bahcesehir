import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/home';

const App = StackNavigator({
  MainScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'MARVEL',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTitleStyle: {
        color: 'white',
      },
    },
  },
});

export default App;
