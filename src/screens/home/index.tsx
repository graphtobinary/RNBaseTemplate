import React from 'react';
import {View} from 'react-native';
import {HomeStyle} from './styles';
import FeedDisplay from '../../components/FeedDisplay';

const Home = () => {
  return (
    <View style={HomeStyle.Container}>
      <FeedDisplay />
    </View>
  );
};

export default Home;
