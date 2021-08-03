import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

export default class CartItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/americano.png')}
          style={styles.image}
        />
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>Americano</Text>
          <Text style={styles.details}>single | iced | medium | full ice</Text>
          <Text style={styles.amount}>x 1</Text>
        </View>
        <Text style={styles.price}>$3.00</Text>
      </View>
    );
  }
}
