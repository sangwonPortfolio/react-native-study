import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import styles from '../../styles/search/index';
import Icon from 'react-native-vector-icons/AntDesign';

const CategoryListDummyData = [
  {categoryname: '전체', categorypkey: 1},
  {categoryname: '짱구', categorypkey: 2},
  {categoryname: '짱아', categorypkey: 3},
  {categoryname: '철수', categorypkey: 4},
  {categoryname: '훈이', categorypkey: 5},
  {categoryname: '맹구', categorypkey: 6},
  {categoryname: '유리', categorypkey: 7},
  {categoryname: '흰둥이', categorypkey: 8},
];

/**
 * 카테고리 목록
 * 카테고리 선택 시 부모 component SearchScreen에 categorypkey state값 수정
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SearchCategory = props => {
  const [categoryList, setCategoryList] = React.useState(
    CategoryListDummyData.slice(0, 6),
  );

  const [categoryAllYn, setCategoryAllYn] = useState(false); // 카테고리 전체보기 설정

  /**
   * 카테고리 전체보기 일부보기 ux
   */
  const categoryAllYnHandle = () => {
    if (categoryAllYn === false) {
      setCategoryList(CategoryListDummyData);
      setCategoryAllYn(true);
    } else {
      setCategoryList(CategoryListDummyData.slice(0, 6));
      setCategoryAllYn(false);
    }
  };

  return (
    <SafeAreaView style={styles.searchCategoryStyles.searchCategoryArea}>
      <View style={styles.searchCategoryStyles.categoryContainer}>
        {categoryList.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.categorypkey}
              style={styles.searchCategoryStyles.categoryItem}
              onPress={() => {
                props.categorypkeyHandle(item.categorypkey);
              }}>
              <Text
                key={item.categorypkey}
                style={styles.searchCategoryStyles.categoryItemText}>
                {item.categoryname}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {categoryAllYn === false ? (
        <TouchableOpacity activeOpacity={1} onPress={categoryAllYnHandle}>
          <Icon name={'down'} color={'white'} size={25} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={1} onPress={categoryAllYnHandle}>
          <Icon name={'up'} color={'white'} size={25} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default SearchCategory;
