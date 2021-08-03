import React, {Component} from 'react';
import {Text, View, ScrollView, Image, StatusBar} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import MenuCard from '../../components/MenuCard';

import {colors} from '../../constants';
import styles from './styles';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <View style={styles.greetingWrapper}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.username}>Anderson</Text>
          </View>
          <View style={styles.icon}>
            <IonIcon
              name="cart-outline"
              size={26}
              color={colors.primaryText}
              style={{marginRight: 20}}
            />
            <IonIcon
              name="person-outline"
              size={26}
              color={colors.primaryText}
            />
          </View>
        </View>

        <View style={styles.loyaltyWrapper}>
          <View style={styles.loyaltyDetails}>
            <Text style={styles.loyaltyDetailsText}>Loyalty Card</Text>
            <Text style={styles.loyaltyDetailsText}>4 / 8</Text>
          </View>
          <View style={styles.loyaltyIcon}>
            <Image
              source={require('../../assets/coffee-cup-active.png')}
              style={styles.coffee}
            />
            <Image
              source={require('../../assets/coffee-cup-active.png')}
              style={styles.coffee}
            />
            <Image
              source={require('../../assets/coffee-cup-active.png')}
              style={styles.coffee}
            />
            <Image
              source={require('../../assets/coffee-cup-active.png')}
              style={styles.coffee}
            />
            <Image
              source={require('../../assets/coffee-cup.png')}
              style={styles.coffee}
            />
            <Image
              source={require('../../assets/coffee-cup.png')}
              style={styles.coffee}
            />
            <Image
              source={require('../../assets/coffee-cup.png')}
              style={styles.coffee}
            />
            <Image
              source={require('../../assets/coffee-cup.png')}
              style={styles.coffee}
            />
          </View>
        </View>

        <View style={styles.menuWrapper}>
          <Text style={styles.menuTitle}>Choose your coffee</Text>
          <View style={styles.menuCard}>
            <MenuCard
              handlePress={() => this.props.navigation.navigate('Details')}
            />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </View>
        </View>
      </ScrollView>
    );
  }
}
