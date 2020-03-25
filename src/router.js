import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Mine from './pages/Mine';
import Message from './pages/Message';
import Detail from './pages/Detail';

const PageStack = (screen, name, title) => createStackNavigator({
  [name]: {
    screen: screen,
    navigationOptions: {
      title: title,
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: '微博详情',
    },
  },

});
const HomeScreen = PageStack(Home, 'Home', '首 页');
const MessageScreen = PageStack(Message, 'Movie', '消 息');
const MineScreen = PageStack(Mine, 'Mine', '我');

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '微博',
      tabBarIcon: ({focused}) => {
        return <Image
          source={focused ? require('./static/images/bar/home_a.png') : require('./static/images/bar/home.png')}
          style={{width: 25, height: 25}}/>;
      },
    },
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({focused}) => {
        return <Image
          source={focused ? require('./static/images/bar/message_a.png') : require('./static/images/bar/message.png')}
          style={{width: 25, height: 25}}/>;
      },
    },
  },
  Mine: {
    screen: MineScreen,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({focused}) => {
        return <Image
          source={focused ? require('./static/images/bar/my_a.png') : require('./static/images/bar/my.png')}
          style={{width: 25, height: 25}}/>;
      },
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: '#fa7d3c',
  },
});

export default TabNavigator;
