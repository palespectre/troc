import React from 'react'
import MapScreen from './Screens/MapScreen'
import { ListeScreen } from './Screens/ListeScreen'
import AddScreen from './Screens/AddScreen'
import AccountScreen from './Screens/AccountScreen'
import Logo from './Components/Logo'
import TabIcon from './Components/TabIcon'
import { View, TouchableOpacity, Image, Button, StyleSheet } from "react-native"
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"
import Icon from "react-native-vector-icons/Ionicons"

/* stack navigation */
// const AppNavigator = createStackNavigator(
// {
//   Carte: MapScreen,
//   Liste: ListeScreen,
//   Ajouter: AddScreen,
//   Compte: AccountScreen,
// },
// {
//   initialRouteName: "Carte",
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: '#FA7268',
//       elevation: 0,
//     },
//     headerTintColor: '#fff',
//     headerTitle: <Logo />,
//     headerTitleStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
//   }
// }
// );

/* bottom tab navigation */
const TabNavigator = createBottomTabNavigator({
  Carte: {
    screen: MapScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon
              iconDefault='md-pin'
              iconFocused='md-pin'
              focused={focused}
              tintColor={tintColor}
          />
      )
    }
  },
  Liste: {
    screen: ListeScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon
              iconDefault='md-list'
              iconFocused='md-list'
              focused={focused}
              tintColor={tintColor}
          />
      )
    }
  },
  Ajouter: {
    screen: AddScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon
              iconDefault='md-add'
              iconFocused='md-add'
              focused={focused}
              tintColor={tintColor}
          />
      )
    }
  },
  Compte: {
    screen: AccountScreen,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
          <TabIcon
              iconDefault='md-person'
              iconFocused='md-person'
              focused={focused}
              tintColor={tintColor}
          />
      )
    }
  },
},
{tabBarOptions: {
  activeTintColor: '#FA7268',
  inactiveTintColor: 'grey',
  style: {height: 55},
  labelStyle: {fontWeight: 'bold'},
}}
);

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});

export default createAppContainer(TabNavigator);
