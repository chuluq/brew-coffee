import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import CartItem from '../../components/CartItem';

import styles from './styles';

export default class CartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Cart</Text>
        <View style={styles.carts}>
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
      </SafeAreaView>
    );
  }
}
