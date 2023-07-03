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
    height: 40,
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

const homeStoryStyles = StyleSheet.create({
  homeStoryContainer: {
    marginTop: 5,
    height: 110,
    flexDirection: 'row',
    width: '100%',
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
  newStoryMemberProfile: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderColor: 'pink',
    borderWidth: 4,
  },
  memberName: {
    marginTop: 5,
    color: 'white',
  },
});

const homeContentStyles = StyleSheet.create({
  HomeContentContainer: {
    width: '100%',
    flex: 1, // flex: 1 안하면 스크롤이 끝까지 안내려감
  },
  contentItem: {
    marginTop: 5,
    width: '100%',
    marginBottom: 10,
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

export default {
  homeScreenStyles,
  homeHeaderStyles,
  homeContentStyles,
  homeStoryStyles,
};
