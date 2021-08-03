import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Button extends Component {
  render() {
    const {title} = this.props;

    return (
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
