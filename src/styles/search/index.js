import React from 'react';
import {StyleSheet} from 'react-native';

const searchScreenStyles = StyleSheet.create({
  searchScreenAres: {
    flex: 1,
    backgroundColor: 'black',
  },
});

const searchStyles = StyleSheet.create({
  searchArea: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    width: '90%',
    backgroundColor: '#696565',
    borderRadius: 10,
    height: 40,
    color: 'gray',
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 10,
  },
});

const searchCategoryStyles = StyleSheet.create({
  searchCategoryArea: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryItem: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderRadius: 10,
    width: '30%',
    backgroundColor: 'white',
  },
  categoryItemText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
  },
});

const categoryContentsStyles = StyleSheet.create({
  categoryContentsArea: {
    color: 'white',
  },
  text: {
    color: 'white',
  },
});

export default {
  searchScreenStyles,
  searchStyles,
  searchCategoryStyles,
  categoryContentsStyles,
};
