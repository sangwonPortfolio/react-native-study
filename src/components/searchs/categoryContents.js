import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from '../../styles/search/index';

const contentList = [
  {
    categorypkey: 1,
    contents: [
      '영월 캠핑장 짱짱!!',
      '관악산 굳굳',
      '전주손칼국수',
      '보스턴버거',
    ],
  },
  {categorypkey: 2, contents: []},
  {categorypkey: 3, contents: []},
  {categorypkey: 4, contents: []},
  {categorypkey: 5, contents: []},
  {categorypkey: 6, contents: []},
];

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
    <SafeAreaView>
      {contents.map((item, idx) => {
        return <Text style={styles.categoryContentsStyles.text}>{item}</Text>;
      })}
    </SafeAreaView>
  );
};

export default categoryContents;
