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
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './AddRecipeScreen.scss';

type SectionListProps = {
  recipes: DataType[];
};

type DataType = {
  title: string;
  products: string[];
  steps: string;
};

// section list shown on the search page listing all added recipes
const SectionList: FC<SectionListProps> = ({recipes}) => {
  return (
    <>
      {recipes?.map((recipe: DataType) => (
        <View style={styles.item} key={recipe?.title}>
          <Text style={styles.title}>{recipe?.title}</Text>

          {recipe?.products?.map(product => (
            <Text style={styles.title} key={product}>
              {product}
            </Text>
          ))}

          <Text style={styles.title}>{recipe?.steps}</Text>
        </View>
      ))}
    </>
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

export default SectionList;
