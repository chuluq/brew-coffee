import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabs from './HomeTabs';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}
