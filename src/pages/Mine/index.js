import React from 'react';
import { Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>个人中心页</Text>
      </View>
    )
  }
}
