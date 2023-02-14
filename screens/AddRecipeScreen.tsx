import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './AddRecipeScreen.scss';
import {storeObjectData, clearAll, getObjectData} from '../ManageData';

const AddRecipeScreen: FC<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [title, setTitle] = useState<string>('');
  const [products, setProducts] = useState<string[]>(['']);
  const [steps, setSteps] = useState<string>('');

  const showAddedRecipeAlert = (): void => {
    Alert.alert('Recipe added', 'View all recipes in the Search menu', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const clearAllFields = (): void => {
    setTitle('');
    setProducts(['']);
    setSteps('');
  };

  const addRecipeToStorage = async (): Promise<void> => {
    let currentRecipes = (await getObjectData('recipes')) || [];
    storeObjectData('recipes', [
      ...currentRecipes,
      {
        title: title,
        products: products,
        steps: steps,
      },
    ]);

    showAddedRecipeAlert();
    clearAllFields();
  };

  return (
    <View style={style.wrapperView}>
      <ScrollView style={style.scrollView}>
        <View style={style.inlineView}>
          <Text style={style.text}>Title</Text>
          <TextInput
            style={style.textInput}
            onChangeText={newText => setTitle(newText)}
            value={title}
          />

          <Text style={style.text}>Products</Text>
          {products.map((product, index: any) => (
            <TextInput
              key={index}
              style={style.textInput}
              onChangeText={newText =>
                setProducts(prevProducts => {
                  const newProducts = [...prevProducts];
                  newProducts[index] = newText;
                  return newProducts;
                })
              }
              value={product}
            />
          ))}

          {/* plus button for adding new product */}
          <TouchableOpacity
            onPress={() => {
              setProducts(prevProducts => prevProducts.concat(''));
            }}
            style={style.roundButton}>
            <Icon name="plus" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={style.text}>Steps</Text>
          <TextInput
            multiline
            style={style.textInput}
            onChangeText={newText => setSteps(newText)}
            value={steps}
          />

          <Text style={style.text}>Category</Text>
          <Picker
            style={style.dropdown}
            selectedValue={selectedCategory}
            onValueChange={(itemValue: string) =>
              setSelectedCategory(itemValue)
            }
            mode="dropdown">
            <Picker.Item label="Salad" value="Salad" />
            <Picker.Item label="Soup" value="Soup" />
            <Picker.Item label="Main" value="Main" />
            <Picker.Item label="Dessert" value="Dessert" />
          </Picker>

          <TouchableOpacity
            onPress={() => addRecipeToStorage()}
            style={style.addRecipeButton}>
            <Text style={style.textButton}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => clearAll()}
            style={style.addRecipeButton}>
            <Text style={style.textButton}>Clear all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddRecipeScreen;
