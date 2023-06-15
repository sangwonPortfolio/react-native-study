import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/home/index';

const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.homeHeaderStyles.home_header_container}>
      <View style={styles.homeHeaderStyles.area}>
        <Text style={styles.homeHeaderStyles.title}>Instagram</Text>
      </View>
      <View style={styles.homeHeaderStyles.icons}>
        <Icon
          style={styles.homeHeaderStyles.icons_hearto}
          name={'hearto'}
          color={'white'}
          size={25}
        />
        <Icon
          style={styles.homeHeaderStyles.icons_message1}
          name={'message1'}
          color={'white'}
          size={25}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
