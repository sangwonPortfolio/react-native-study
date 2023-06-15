import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import styles from '../../styles/home/index';

const storyList = [
  {
    name: 'ch_sangwon',
    image: require('../../assets/images/profiles/profileImage4.jpeg'),
  },
  {
    name: 'sangwon',
    image: require('../../assets/images/profiles/profileImage2.jpeg'),
  },
  {
    name: 'ch_sangwon',
    image: require('../../assets/images/profiles/profileImage3.jpeg'),
  },
  {
    name: 'sangwon',
    image: require('../../assets/images/profiles/profileImage2.jpeg'),
  },
];

const HomeStory = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.homeStoryStyles.homeStoryContainer}>
      <View style={styles.homeStoryStyles.storyItem}>
        <Image
          source={require('../../assets/images/profiles/profileTest.jpeg')}
          style={styles.homeStoryStyles.memberProfile}
        />
        <Text style={styles.homeStoryStyles.memberName}>내 스토리</Text>
      </View>
      {storyList.map((v, index) => {
        return (
          <View key={index} style={styles.homeStoryStyles.storyItem}>
            <Image
              key={index}
              source={v.image}
              style={styles.homeStoryStyles.memberProfile}
            />
            <Text key={index} style={styles.homeStoryStyles.memberName}>
              {v.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default HomeStory;
