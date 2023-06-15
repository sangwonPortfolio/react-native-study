import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import HomeHeader from '../components/homes/HomeHeader';
import HomeStory from '../components/homes/HomeStory';
import HomeContents from '../components/homes/HomeContents';
import styles from '../styles/home';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.homeScreenStyles.HomeScreenContainer}>
      <HomeHeader />
      <HomeStory />
      <HomeContents />
    </ScrollView>
  );
};

export default HomeScreen;
