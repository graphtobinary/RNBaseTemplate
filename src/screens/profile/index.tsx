import React from 'react';
import {View, Text} from 'react-native';
import {HomeStyle} from './styles';

const Profile = () => {
  return (
    <View style={HomeStyle.Container}>
      <Text style={HomeStyle.mainText}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
