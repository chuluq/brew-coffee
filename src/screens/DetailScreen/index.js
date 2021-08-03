import React, {Component} from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';

import Button from '../../components/Button';

import {colors} from '../../constants';
import styles from './styles';

export default class DetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.bannerWrapper}>
            <Image
              source={require('../../assets/americano.png')}
              style={styles.bannerImage}
            />
          </View>

          <View style={styles.detailsWrapper}>
            <View style={styles.detailsCoffee}>
              <Text style={styles.title}>Americano</Text>
              <View style={styles.coffeCount}>{/* Count */}</View>
            </View>
            <View style={styles.detailsCoffee}>
              <Text style={styles.title}>Shot</Text>
              <View style={styles.shotType}>
                <Text style={styles.shots}>Single</Text>
                <Text style={styles.shots}>Double</Text>
              </View>
            </View>
            <View style={styles.detailsCoffee}>
              <Text style={styles.title}>Select</Text>
              <View style={styles.coffeeTypeIcon}>
                <Image
                  source={require('../../assets/hot-coffee-icon.png')}
                  style={[styles.coffeeType, {tintColor: colors.secondaryText}]}
                />
                <Image
                  source={require('../../assets/ice-coffee-icon.png')}
                  style={[styles.coffeeType, {tintColor: '#000'}]}
                />
              </View>
            </View>
            <View style={styles.detailsCoffee}>
              <Text style={styles.title}>Size</Text>
              <View style={styles.sizeIcon}>
                <Image
                  source={require('../../assets/size-icon.png')}
                  style={styles.smallSize}
                />
                <Image
                  source={require('../../assets/size-icon.png')}
                  style={[styles.mediumSize, {tintColor: '#000'}]}
                />
                <Image
                  source={require('../../assets/size-icon.png')}
                  style={styles.bigSize}
                />
              </View>
            </View>
            <View style={styles.detailsCoffee}>
              <Text style={styles.title}>Ice</Text>
              <View style={styles.iceIcon}>
                <Image
                  source={require('../../assets/ice-1-icon.png')}
                  style={styles.ice}
                />
                <Image
                  source={require('../../assets/ice-2-icon.png')}
                  style={styles.ice}
                />
                <Image
                  source={require('../../assets/ice-3-icon.png')}
                  style={[styles.ice, {tintColor: '#000'}]}
                />
              </View>
            </View>
          </View>

          <View style={styles.totalWrapper}>
            <Text style={[styles.totalTitle, {fontSize: 16}]}>
              Total Amount
            </Text>
            <Text style={styles.price}>$3.00</Text>
          </View>

          <Button title="checkout" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
