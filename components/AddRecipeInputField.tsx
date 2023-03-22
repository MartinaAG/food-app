import React, {FC} from 'react';
import {Text, TextInput} from 'react-native';
import style from '../screens/AddRecipeScreen.scss';

type AddRecipeInputFieldType = {
  title: string;
  value: string;
  handleChange: Function;
  error: boolean;
  errorMessage: string;
};

const AddRecipeInputField: FC<AddRecipeInputFieldType> = props => {
  return (
    <>
      <Text style={style.text}>{props.title}</Text>
      <TextInput
        style={[style.textInput, props.error && style.error]}
        onChangeText={newText => props.handleChange(newText)}
        value={props.value}
      />
      {props.error && <Text style={style.errorText}>{props.errorMessage}</Text>}
    </>
  );
};

export default AddRecipeInputField;
