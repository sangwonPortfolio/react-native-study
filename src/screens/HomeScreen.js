import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeHeader from '../components/homes/HomeHeader';
import HomeStory from '../components/homes/HomeStory';
import HomeContents from '../components/homes/HomeContents';
import styles from '../styles/home';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homeScreenStyles.HomeScreenContainer}>
      <HomeHeader />
      <HomeStory />
      <HomeContents />
    </SafeAreaView>
  );
};

export default HomeScreen;
