import React, {FC, useState} from 'react';
import {Text, ScrollView, View, Alert, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import style from './AddRecipeScreen.scss';
import {storeObjectData, clearAll, getObjectData} from '../ManageData';
import AddRecipeInputField from '../components/AddRecipeInputField';
import AddRecipeProductInputField from '../components/AddRecipeProductInputField';

type Recipe = {
  title: string;
  products: string[];
  steps: string;
};

const AddRecipeScreen: FC<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [title, setTitle] = useState<string>('');
  const [products, setProducts] = useState<string[]>(['']);
  const [steps, setSteps] = useState<string>('');
  const [titleError, setTitleError] = useState(false);
  const [productsError, setProductsError] = useState(false);
  const [stepsError, setStepsError] = useState(false);

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

  const validateInputFields = (currentRecipes: Recipe[]): boolean => {
    let areValidInputs = true;

    const isAlreadyExistingRecipe = currentRecipes.find(
      (recipe: Recipe) => recipe.title === title,
    );

    if (!title || isAlreadyExistingRecipe) {
      setTitleError(true);
      areValidInputs = false;
    }

    if (!products[0]) {
      setProductsError(true);
      areValidInputs = false;
    }

    if (!steps) {
      setStepsError(true);
      areValidInputs = false;
    }

    return areValidInputs;
  };

  const addRecipeToStorage = async (): Promise<void> => {
    let currentRecipes = (await getObjectData('recipes')) || [];

    const areInputsValid = validateInputFields(currentRecipes);

    if (areInputsValid) {
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
    }
  };

  const handleTextChange = (newText: string) => {
    setTitle(newText);
    setTitleError(false);
  };

  const handleProductsChange = (newText: string, index: number) => {
    setProducts(prevProducts => {
      const newProducts = [...prevProducts];
      newProducts[index] = newText;
      return newProducts;
    });
    setProductsError(false);
  };

  const handleStepsChange = (newText: string) => {
    setSteps(newText);
    setStepsError(false);
  };

  return (
    <View style={style.wrapperView}>
      <ScrollView style={style.scrollView}>
        <View style={style.inlineView}>
          <AddRecipeInputField
            title={'Title'}
            error={titleError}
            handleChange={handleTextChange}
            errorMessage={'Please enter a valid title'}
            value={title}
          />

          <AddRecipeProductInputField
            title={'Products'}
            products={products}
            handleChange={handleProductsChange}
            error={productsError}
            errorMessage={'Please add some products'}
            updateProducts={() =>
              setProducts(prevProducts => prevProducts.concat(''))
            }
          />

          <AddRecipeInputField
            title={'Steps'}
            error={stepsError}
            handleChange={handleStepsChange}
            errorMessage={'Please add some steps'}
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
