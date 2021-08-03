import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Tabs from './Tabs';
import DetailScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen';

import {colors} from '../constants';

const Stack = createStackNavigator();

export default class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <IonIcons
                name="cart-outline"
                size={24}
                style={{marginRight: 20}}
                onPress={() => navigation.navigate('Carts')}
              />
            ),
            title: 'Details',
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: colors.primaryText,
            },
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="Carts"
          component={CartScreen}
          options={{title: ''}}
        />
      </Stack.Navigator>
    );
  }
}
