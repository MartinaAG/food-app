import React, {FC} from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import style from '../screens/AddRecipeScreen.scss';
import Icon from 'react-native-vector-icons/FontAwesome';

type AddRecipeProductInputFieldType = {
  title: string;
  handleChange: (newText: string, index: number) => void;
  products: string[];
  error: boolean;
  errorMessage: string;
  updateProducts: () => void;
};

const AddRecipeProductInputField: FC<AddRecipeProductInputFieldType> = ({
  title,
  products,
  handleChange,
  error,
  errorMessage,
  updateProducts,
}) => {
  return (
    <>
      <Text style={style.text}>{title}</Text>
      {products.map((product: string, index: any) => (
        <TextInput
          key={index}
          style={[style.textInput, error && style.error]}
          onChangeText={newText => handleChange(newText, index)}
          value={product}
        />
      ))}
      {error && <Text style={style.errorText}>{errorMessage}</Text>}

      {/* plus button for adding a new product */}
      <TouchableOpacity onPress={updateProducts} style={style.roundButton}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

export default AddRecipeProductInputField;
