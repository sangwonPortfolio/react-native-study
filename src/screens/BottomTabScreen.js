import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from './HomeScreen';
import SearchScreen from './search';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

/**
 * tabBarActiveTinitColor : 활성화된 항목의 아이콘과 텍스트 색상
 * tabBarActiveBackgroundColor : 활성화된 항목의 배경색
 * tabBarInactiveTintColor : 비활성화된 항목의 아이콘과 텍스트 색상
 * tabBarInactiveBackgroundColor : 비활성화된 항목의 배경색
 * tabBarShowLabel : 항목에서 텍스트의 가시성 설정(default : true)
 * tabBarShowIcon : 항목에서 아이콘의 가시성 설정(default : false)
 * tabBarStyle : 하단 탭 스타일
 * tabBarLabelStyle : 텍스트 스타일
 * tabBarItemStyle : 항목 스타일
 * tabBarLabelPosition : 텍스트 위치
 * - beside-icon : 아이콘 우측
 * - below-icon : 아이콘 하단
 * tabBarAllowFontScaling : 시스템 폰트 크기에 따라 폰트 크기를 키울지 결정(default : true)
 * tabBarSafeAreaInset : SafeAreaView의 forceInset 덮어쓰는 객체(default: {bottom: 'always', top: 'naver'})
 * tabBarKeyBoardHidesTabBar : 키보드가 나타날 떄 하단 탭을 가릴지 결정(default : false)
 */

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarShowLabel: false,
        tabBarKeyBoardHidesTabBar: true,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Icon name="search" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => {
            return <Icon name="notifications" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: '메시지',
          tabBarIcon: ({color, size}) => {
            return <Icon name="message" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

export default MainScreen;
