import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, RewardStack, OrderStack} from './StackNavigation';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
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
          name="RewardStack"
          component={RewardStack}
          options={{
            tabBarIcon: ({color, size}) => {
              return <IonIcon name="gift-outline" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <IonIcon name="receipt-outline" color={color} size={size} />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}
