import React from 'react';
import {StyleSheet} from 'react-native';

const homeScreenStyles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});

const homeHeaderStyles = StyleSheet.create({
  home_header_container: {
    flexDirection: 'row',
    // marginTop: 100,
  },
  area: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginLeft: 5,
    color: 'white',
  },
  good: {
    fontSize: 25,
    marginRight: 5,
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
  },
  icons_hearto: {
    marginRight: 10,
    marginTop: 5,
  },
  icons_message1: {
    marginRight: 10,
    marginTop: 5,
  },
});

const homeContentStyles = StyleSheet.create({
  HomeContentContainer: {
    width: '100%',
  },
  contentItem: {
    marginTop: 15,
    width: '100%',
  },
  contentProfileGroup: {
    flexDirection: 'row',
    marginTop: 5,
  },
  contentProfileImg: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 5,
  },
  contentProfileName: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
    lineHeight: 25,
    fontWeight: 500,
  },
  content: {
    marginTop: 10,
    width: '100%',
    height: 500,
  },
  likecnt: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
    fontWeight: 700,
  },
  contentMsgGroup: {
    flexDirection: 'row',
  },
  contentName: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
    fontWeight: 700,
  },
  contentmsg: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
    lineHeight: 25,
    fontWeight: 300,
  },
});

const homeStoryStyles = StyleSheet.create({
  homeStoryContainer: {
    marginTop: 10,
    height: 110,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  storyItem: {
    marginLeft: 6,
    alignItems: 'center',
  },
  memberProfile: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderColor: 'white',
    borderWidth: 1,
  },
  memberName: {
    marginTop: 5,
    color: 'white',
  },
});

export default {
  homeScreenStyles,
  homeHeaderStyles,
  homeContentStyles,
  homeStoryStyles,
};
