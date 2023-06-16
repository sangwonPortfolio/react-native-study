import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import styles from '../../styles/home/index';

const storyList = [
  {
    storypkey: 1,
    name: '내스토리',
    image: require('../../assets/images/profiles/profileImage4.jpeg'),
    newStory: false,
  },
  {
    storypkey: 2,
    name: 'sangwon',
    image: require('../../assets/images/profiles/profileImage2.jpeg'),
    newStory: true,
  },
  {
    storypkey: 3,
    name: 'ch_sangwon',
    image: require('../../assets/images/profiles/profileImage3.jpeg'),
    newStory: true,
  },
  {
    storypkey: 4,
    name: 'sangwon',
    image: require('../../assets/images/profiles/profileImage2.jpeg'),
    newStory: false,
  },
  {
    storypkey: 5,
    name: 'sangwon',
    image: require('../../assets/images/profiles/profileImage4.jpeg'),
    newStory: false,
  },
];

const HomeStory = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.homeStoryStyles.homeStoryContainer}>
      {storyList.map((v, index) => {
        return (
          <View key={v.storypkey} style={styles.homeStoryStyles.storyItem}>
            <Image
              source={v.image}
              style={
                v.newStory === true
                  ? styles.homeStoryStyles.newStoryMemberProfile
                  : styles.homeStoryStyles.memberProfile
              }
            />
            <Text style={styles.homeStoryStyles.memberName}>{v.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default HomeStory;
