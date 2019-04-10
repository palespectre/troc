import React from 'react';
import Navigator from './Navigator';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation"

const TabNavigator = createBottomTabNavigator({
  Accueil: AppNavigator,
  Ajouter: AppNavigator,
  Messagerie: AppNavigator,
  Compte: AppNavigator,
});

const BottomContainer = createAppContainer(TabNavigator);

export default AppNavigator;
