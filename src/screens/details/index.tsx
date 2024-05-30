import React from 'react';
import {View, Text, Button} from 'react-native';
import {DetailStyle} from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationInterface} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';

const Details = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationInterface>>();
  return (
    <View style={DetailStyle.Container}>
      <Text style={DetailStyle.mainText}>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(ROUTES.HOME)}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Details;
