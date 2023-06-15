import React from 'react';
import Search from '../../components/searchs/Search';
import {SafeAreaView} from 'react-native';
import styles from '../../styles/search/index';
import SearchCategory from '../../components/searchs/SearchCategory';
import CategoryContents from '../../components/searchs/categoryContents';

/**
 * 검색 화면
 * category 목록 component에서 카테고리 클릭 시 categorypkey 값 변경 후
 * CategoryContents(카테고리별 게시물) component에 선택된 categorypkey 값 전달
 * @returns {JSX.Element}
 * @constructor
 */
const SearchScreen = () => {
  const [categorypkey, setCategorypkey] = React.useState(1);

  const categorypkeyHandle = v => {
    setCategorypkey(v);
  };

  return (
    <SafeAreaView style={styles.searchScreenStyles.searchScreenAres}>
      <Search />
      <SearchCategory categorypkeyHandle={categorypkeyHandle} />
      <CategoryContents categorypkey={categorypkey} />
    </SafeAreaView>
  );
};

export default SearchScreen;
