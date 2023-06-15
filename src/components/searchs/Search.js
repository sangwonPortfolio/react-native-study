import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import styles from '../../styles/search/index';

const Search = () => {
  return (
    <SafeAreaView style={styles.searchStyles.searchArea}>
      <TextInput style={styles.searchStyles.searchInput} placeholder={'검색'} />
    </SafeAreaView>
  );
};

export default Search;
