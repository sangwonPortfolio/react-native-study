import React from 'react';
import {Text, View, Image, FlatList, SafeAreaView} from 'react-native';
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

const renderItem = ({item}) => {
  return (
    <View key={item.storypkey} style={styles.homeStoryStyles.storyItem}>
      <Image
        source={item.image}
        style={
          item.newStory === true
            ? styles.homeStoryStyles.newStoryMemberProfile
            : styles.homeStoryStyles.memberProfile
        }
      />
      <Text style={styles.homeStoryStyles.memberName}>{item.name}</Text>
    </View>
  );
};

const HomeStory = () => {
  return (
    <SafeAreaView style={styles.homeStoryStyles.homeStoryContainer}>
      <FlatList
        data={storyList}
        renderItem={renderItem}
        horizontal={true} // 가로 스크롤로 변경
        showsHorizontalScrollIndicator={false} // 가로 스크롤바 없애기
        keyExtractor={item => String(item.storypkey)}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.categoryContentsStyles.contentEmptyText}>
              게시물이 없습니다.
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeStory;
