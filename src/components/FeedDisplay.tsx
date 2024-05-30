// File: FeedDisplay.tsx

import React from 'react';
import {View, Text, FlatList, StyleSheet, Image, Pressable} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../navigation/routes';
import {NavigationInterface} from '../types';

type FeedItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const staticFeedData: FeedItem[] = [
  {
    id: '1',
    title: 'Post 1',
    description: 'Description of Post 1',
    image: 'https://via.placeholder.com/250',
  },
  {
    id: '2',
    title: 'Post 2',
    description: 'Description of Post 2',
    image: 'https://via.placeholder.com/250',
  },
  {
    id: '3',
    title: 'Post 3',
    description: 'Description of Post 3',
    image: 'https://via.placeholder.com/250',
  },
  {
    id: '4',
    title: 'Post 4',
    description: 'Description of Post 4',
    image: 'https://via.placeholder.com/250',
  },
  {
    id: '5',
    title: 'Post 5',
    description: 'Description of Post 5',
    image: 'https://via.placeholder.com/250',
  },
  // Add more static data as needed
];

const FeedDisplay: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationInterface>>();
  const renderItem = ({item}: {item: FeedItem}) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate(ROUTES.DETAILS)}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={staticFeedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default FeedDisplay;
