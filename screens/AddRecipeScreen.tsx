import React, {FC, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './AddRecipeScreen.scss';

const AddRecipeScreen: FC<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <View style={style.view}>
      <Text style={style.text}>Title</Text>
      <TextInput style={style.textInput} />

      <Text style={style.text}>Products</Text>
      <TextInput style={style.textInput} />

      <TouchableOpacity
        onPress={() => Alert.alert('I will add a new product')}
        style={style.roundButton}>
        <Icon name="plus" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={style.text}>Category</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue: string) => setSelectedCategory(itemValue)}
        mode="dropdown">
        <Picker.Item label="Salad" value="Salad" />
        <Picker.Item label="Soup" value="Soup" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Button title="Add recipe" onPress={() => Alert.alert('Added recipe')} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 18,
  },
});

export default AddRecipeScreen;
