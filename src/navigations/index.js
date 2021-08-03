import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';

export default class RootNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    );
  }
}
