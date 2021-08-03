import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export default class MenuCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.card}>
        <Image source={require('../../assets/americano.png')} />
        <Text style={styles.title}>Americano</Text>
      </TouchableOpacity>
    );
  }
}
