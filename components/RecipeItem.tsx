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
import Icon from 'react-native-vector-icons/FontAwesome';
import {RecipeItemProps} from '../types/types';
import CircleImage from './CircleImage';

const RecipeItem: FC<RecipeItemProps> = ({
  title = '',
  selectedCategory = '',
  deleteRecipeItem,
}) => {
  const shorterTitle = title.length > 14 ? title.substr(0, 13) + '...' : title;

  return (
    <View style={styles.item} key={title}>
      <CircleImage source={require('../images/manja.jpg')} size={100} />
      <TouchableOpacity
        onPress={() => deleteRecipeItem(title)}
        style={styles.deleteButton}>
        <Icon name="close" size={24} color="#b87aa8" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{shorterTitle}</Text>
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
  deleteButton: {
    position: 'absolute',
    top: 13,
    right: 20,
    zIndex: 1,
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
