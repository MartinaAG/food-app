import React, {FC, useState} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {RecipeDataType} from '../types/types';
import CircleImage from './CircleImage';

const RecipeItem: FC<RecipeDataType> = ({
  title = '',
  selectedCategory = '',
}) => {
  return (
    <View style={styles.item} key={title}>
      <CircleImage source={require('../images/manja.jpg')} size={100} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>Category: {selectedCategory}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: 'black',
    backgroundColor: '#f2d9f2',
    padding: 10,
    marginVertical: 8,
    flexDirection: 'row', // Elements will be laid out horizontally
    alignItems: 'center', // Center items vertically within the container
    borderRadius: 20,
    shadowColor: 'black', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 4, // Android shadow elevation
  },
  title: {
    fontSize: 26,
  },
  category: {
    fontSize: 16,
  },
  logo: {
    width: '50%',
    height: 150,
  },
  textContainer: {
    marginHorizontal: 12,
  },
});

export default RecipeItem;
