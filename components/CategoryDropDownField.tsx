import React, {FC} from 'react';
import {Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import style from '../screens/AddRecipeScreen.scss';
import {CategoryDropDownFieldType} from '../types/types';

const CategoryDropDownField: FC<CategoryDropDownFieldType> = ({
  title,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <>
      <Text style={style.text}>{title}</Text>
      <Picker
        style={style.dropdown}
        selectedValue={selectedCategory}
        onValueChange={(itemValue: string) => setSelectedCategory(itemValue)}
        mode="dropdown">
        <Picker.Item label="Salad" value="Salad" />
        <Picker.Item label="Soup" value="Soup" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
    </>
  );
};

export default CategoryDropDownField;
