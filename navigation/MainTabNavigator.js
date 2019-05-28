import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Schedule from '../screens/Schedule';
import MyTalks from '../screens/MyTalks';
import Information from '../screens/Information';

const HomeStack = createStackNavigator({
  Home: Schedule,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Calendario',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-calendar'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: MyTalks,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-heart'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: Information,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Información',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-information-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
