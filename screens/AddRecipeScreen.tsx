import React, {FC, useState} from 'react';
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
  const [products, setProducts] = useState<string[]>([]);
  const [steps, setSteps] = useState<string>('');

  const addRecipeToStorage = async (): Promise<void> => {
    console.log('yeeee', title, products, steps);
    let currentRecipes = (await getObjectData('recipes')) || [];
    storeObjectData('recipes', [
      ...currentRecipes,
      {
        title: title,
        products: products,
        steps: steps,
      },
    ]);
  };

  return (
    <View style={style.wrapperView}>
      <ScrollView style={style.scrollView}>
        <View style={style.inlineView}>
          <Text style={style.text}>Title</Text>
          <TextInput
            style={style.textInput}
            onChangeText={newText => setTitle(newText)}
          />

          <Text style={style.text}>Products</Text>
          {products.map((index: any) => (
            <TextInput
              key={index}
              style={style.textInput}
              onChangeText={newText =>
                setProducts(prevProducts => {
                  prevProducts[index] = newText;
                  return prevProducts;
                })
              }
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
            <Text style={style.textButton}>Add recipe</Text>
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
