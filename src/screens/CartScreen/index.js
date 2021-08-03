import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

export default class CartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Cart</Text>
      </SafeAreaView>
    );
  }
}
