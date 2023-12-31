import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from '../../styles/home/index';

const contentDummyList = [
  {
    contentpkey: 1,
    profileimg: require('../../assets/images/profiles/profileImage3.jpeg'),
    name: 'ch_sangwon',
    content: require('../../assets/images/contents/imageTest2.jpeg'),
    likecnt: 10,
    contentmsg: '짱구는 못말려',
  },
  {
    contentpkey: 2,
    profileimg: require('../../assets/images/profiles/profileImage2.jpeg'),
    name: 'ch_sangwon',
    content: require('../../assets/images/contents/content2.jpeg'),
    likecnt: 10,
    contentmsg: '\n뒹굴뒹굴 ~~\n뒹굴뒹굴 ~~',
  },
  {
    contentpkey: 3,
    profileimg: require('../../assets/images/profiles/profileImage4.jpeg'),
    name: 'ch_sangwon',
    content: require('../../assets/images/contents/imageTest2.jpeg'),
    likecnt: 50,
    contentmsg: 'AI 프로필 아니고 진짜 프로필',
  },
];

const HomeContents = () => {
  let lastTap = null;
  const [contentList, setContentList] = React.useState(contentDummyList);

  /**
   * 게시물 좋아요 event
   * TODO: api 연결 시 api에서 좋아요 카운트 증가 및 저장 후 응답 결과로 다시 랜더링
   * @param contentpkey
   */
  const toggleHeart = contentpkey => {
    const updateContentList = contentList.map(content => {
      content.contentpkey === contentpkey
        ? (content.likecnt += 1)
        : content.likecnt;

      return content;
    });
    setContentList(updateContentList);
  };

  /**
   * 더블클릭 첫번째 클릭과 두번재 클릭의 시간차이를 활용
   * @param contentpkey
   */
  const contentOnPress = contentpkey => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    //두번째 tap이 지난 tap을 한지 0.03초 이내에 이뤄졌을 때 -> Double tap
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      toggleHeart(contentpkey);
    } else {
      lastTap = now;
    }
  };

  const renderItem = ({item}) => {
    return (
      <View key={item.contentpkey} style={styles.homeContentStyles.contentItem}>
        <View style={styles.homeContentStyles.contentProfileGroup}>
          <Image
            style={styles.homeContentStyles.contentProfileImg}
            source={item.profileimg}
          />
          <Text style={styles.homeContentStyles.contentProfileName}>
            {item.name}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={1} // 깜빡임 조절하기
          onPress={e => {
            contentOnPress(item.contentpkey);
          }}>
          <ImageBackground
            style={styles.homeContentStyles.content}
            source={item.content}
          />
        </TouchableOpacity>
        <Text style={styles.homeContentStyles.likecnt}>
          좋아요 {item.likecnt}개
        </Text>
        <View style={styles.contentMsgGroup}>
          <Text style={styles.homeContentStyles.contentName}>
            {item.name}{' '}
            <Text style={styles.homeContentStyles.contentmsg}>
              {item.contentmsg}
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.homeContentStyles.HomeContentContainer}>
      <FlatList
        data={contentList}
        renderItem={renderItem}
        keyExtractor={item => String(item.contentpkey)}
        showsVerticalScrollIndicator={false}
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

export default HomeContents;
