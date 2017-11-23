import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import HomeScreen from './screens/home';
import FavoritesScreen from './screens/favorites';
import DetailScreen from './screens/detail';

import TabIcon from './components/tabIcon';

const homeIcon = require('./assets/home.png');
const favoritesIcon = require('./assets/favorites.png');

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <TabIcon
          tintColor={ tintColor }
          icon={ homeIcon }
        />
      ),
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <TabIcon
          tintColor={ tintColor }
          icon={ favoritesIcon }
        />
      ),
    },
  },
});

const App = StackNavigator({
  MainScreen: {
    screen: RootTabs,
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
  DetailScreen: {
    screen: DetailScreen,
  },
});

export default App;
