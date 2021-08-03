import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import RewardScreen from '../screens/RewardScreen';
import OrderScreen from '../screens/OrderScreen';

import {colors} from '../constants';

const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.primaryBackground,
          inactiveTintColor: colors.secondaryText,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <MaterialCommunityIcons
                  name="storefront-outline"
                  color={color}
                  size={size}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Reward"
          component={RewardScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              return <IonIcons name="gift-outline" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <IonIcons name="receipt-outline" color={color} size={size} />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}
