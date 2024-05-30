import React from 'react';
import {View, Text} from 'react-native';
import {HomeStyle} from './styles';

const Feed = () => {
  return (
    <View style={HomeStyle.Container}>
      <Text style={HomeStyle.mainText}>Feed Screen</Text>
    </View>
  );
};

export default Feed;
