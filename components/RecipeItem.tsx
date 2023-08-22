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
} from 'react-native';
import {RecipeDataType} from '../types/types';

const RecipeItem: FC<RecipeDataType> = ({
  title = '',
  products = [],
  steps = '',
  selectedCategory = '',
}) => {
  return (
    <View style={styles.item} key={title}>
      <Text style={styles.title}>{title}</Text>

      {products?.map(product => (
        <Text style={styles.title} key={product}>
          {product}
        </Text>
      ))}

      <Text style={styles.title}>{steps}</Text>
      <Text style={styles.title}>{selectedCategory}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: 'black',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
});

export default RecipeItem;
