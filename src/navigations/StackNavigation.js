import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RewardScreen from '../screens/RewardScreen';
import OrderScreen from '../screens/OrderScreen';

const Stack = createStackNavigator();

export class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

export class RewardStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Reward"
          component={RewardScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

export class OrderStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
