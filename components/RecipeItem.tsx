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
import {storeStringData, getStringData, storeObjectData} from '../ManageData';
import {BottomTabBarHeightCallbackContext} from '@react-navigation/bottom-tabs';

type DataType = {
  title: string;
  data: string[];
};

const RecipeItem: FC<DataType> = ({title, data = []}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.item}>{'maryt'}</Text>
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
