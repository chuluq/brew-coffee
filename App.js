import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/navigations';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    );
  }
}
