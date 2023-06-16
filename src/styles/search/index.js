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
    alignItems: 'center',
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  categoryItem: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1%',
    borderRadius: 10,
    width: '31.33%',
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
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  contentItem: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    color: 'white',
    fontSize: 25,
    marginTop: 5,
    marginBottom: 5,
  },
  content: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
  },
  regdate: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 5,
  },
  contentEmptyText: {
    color: 'white',
    paddingTop: 20,
    fontSize: 20,
  },
});

export default {
  searchScreenStyles,
  searchStyles,
  searchCategoryStyles,
  categoryContentsStyles,
};
