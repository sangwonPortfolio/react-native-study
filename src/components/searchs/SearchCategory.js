import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/search/index';

/**
 * 카테고리 목록
 * 카테고리 선택 시 부모 component SearchScreen에 categorypkey state값 수정
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SearchCategory = props => {
  const [categoryList, setCategoryList] = React.useState([
    {categoryname: '전체', categorypkey: 1},
    {categoryname: '등산', categorypkey: 2},
    {categoryname: '카페', categorypkey: 3},
    {categoryname: '캠핑', categorypkey: 4},
    {categoryname: '낚시', categorypkey: 5},
    {categoryname: '맛집', categorypkey: 6},
  ]);

  return (
    <SafeAreaView style={styles.searchCategoryStyles.searchCategoryArea}>
      {categoryList.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.searchCategoryStyles.categoryItem}
            onPress={() => {
              props.categorypkeyHandle(item.categorypkey);
            }}>
            <Text style={styles.searchCategoryStyles.categoryItemText}>
              {item.categoryname}
            </Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default SearchCategory;
