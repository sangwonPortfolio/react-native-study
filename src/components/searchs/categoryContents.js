import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from '../../styles/search/index';

const contentList = [
  {
    categorypkey: 1,
    contents: [
      {
        contentpkey: 1,
        title: '암흑마왕 대추적',
        content:
          '이제 회사 같은 건 어떻게 되든 괜찮아, 세계의 위기가 어떻든 괜찮아. 어떤 힘든 일이 있어도 가족과 의지 할 수 있다면 극복할 수 있어',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 2,
        title: '어른제국의 역습',
        content:
          '난, 엄마랑 아빠랑 짱아랑, 흰둥이랑 같이 살고 싶으니까요...\n' +
          '싸우기도 하고, 혼나기도 하지만 같이 있고 싶으니까요...\n' +
          '그리고, 난 빨리 어른이 되고 싶어요...',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 3,
        title: '폭풍수면 꿈꾸는 세계 대돌격!',
        content:
          '누군 야단치고 싶어서 야단치는 줄 알아?자식을 훌륭히 키우기 위해 어쩔 수 없이 총대를 매는거야.너희는 아직 어려서 엄마 마음을 잘 모르지만 엄마들은 다 그래 그게 바로 엄마라는거야.\n' +
          '엄만 절대 널 미워하지 않아.',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 4,
        title: '짱구 뒹굴뒹굴 !!',
        content: '조금 먹었더니 오히려 배가 더 고파졌어',
        regdate: '2023-06-16 12:13:00',
      },
    ],
  },
  {
    categorypkey: 2,
    contents: [
      {
        contentpkey: 5,
        title: '짱구 뒹굴뒹굴 !!',
        content: '조금 먹었더니 오히려 배가 더 고파졌어',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 6,
        title: '짱구 뒹굴뒹굴 !!',
        content: '난 일요일만큼은 집에서 쉬고 싶다고',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 7,
        title: '짱구 뒹굴뒹굴 !!',
        content: '난 일요일만큼은 집에서 쉬고 싶다고',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 8,
        title: '짱구 뒹굴뒹굴 !!',
        content: '난 일요일만큼은 집에서 쉬고 싶다고',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 9,
        title: '짱구 뒹굴뒹굴 !!',
        content: '난 일요일만큼은 집에서 쉬고 싶다고',
        regdate: '2023-06-16 12:13:00',
      },
      {
        contentpkey: 10,
        title: '짱구 뒹굴뒹굴 !!',
        content: '난 일요일만큼은 집에서 쉬고 싶다고',
        regdate: '2023-06-16 12:13:00',
      },
    ],
  },
  {categorypkey: 3, contents: []},
  {categorypkey: 4, contents: []},
  {categorypkey: 5, contents: []},
  {categorypkey: 6, contents: []},
  {categorypkey: 7, contents: []},
  {categorypkey: 8, contents: []},
];

const renderItem = ({item}) => {
  return (
    <View
      key={item.contentpkey}
      style={styles.categoryContentsStyles.contentItem}>
      <TouchableOpacity>
        <View>
          <Text style={styles.categoryContentsStyles.title}>{item.title}</Text>
          <Text style={styles.categoryContentsStyles.content}>
            {item.content}
          </Text>
        </View>
        <Text style={styles.categoryContentsStyles.regdate}>
          {item.regdate}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * 카테고리별 게시물
 * @param props
 * @returns {JSX.Element}
 */
const categoryContents = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contents, setContents] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const contentObj = contentList.find(
      (item, idx) => item.categorypkey === props.categorypkey,
    );
    setContents(contentObj.contents);
  }, [props.categorypkey]);

  return (
    <SafeAreaView style={styles.categoryContentsStyles.categoryContentsArea}>
      <FlatList
        data={contents}
        renderItem={renderItem}
        keyExtractor={item => String(item.contentpkey)}
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

export default categoryContents;
