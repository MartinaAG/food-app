import React, {FC, useState} from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image} from 'react-native';
import style from './AddRecipeScreen.scss';
import {storeObjectData, clearAll, getObjectData} from '../ManageData';
import AddRecipeInputField from '../components/AddRecipeInputField';
import AddRecipeProductInputField from '../components/AddRecipeProductInputField';
import CategoryDropDownField from '../components/CategoryDropDownField';
import validateInputFields from '../hooks/validateInputFields';
import {
  getRecipeId,
  showAddedRecipeAlert,
  pickImage,
} from '../helpers/AddRecipeHelper';

const AddRecipeScreen: FC<{}> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Salad');
  const [title, setTitle] = useState<string>('');
  const [products, setProducts] = useState<string[]>(['']);
  const [steps, setSteps] = useState<string>('');
  const [titleError, setTitleError] = useState(false);
  const [productsError, setProductsError] = useState(false);
  const [stepsError, setStepsError] = useState(false);
  const [selectedImageURI, setSelectedImageURI] = useState('');
  const [selectedImageBase64, setSelectedImageBase64] = useState('');

  const clearAllFields = (): void => {
    setTitle('');
    setProducts(['']);
    setSteps('');
    setSelectedImageURI('');
    setSelectedImageBase64('');
  };

  const addRecipeToStorage = async (): Promise<void> => {
    let currentRecipes = (await getObjectData('recipes')) || [];

    const areInputsValid = validateInputFields(
      currentRecipes,
      title,
      products,
      steps,
      setTitleError,
      setProductsError,
      setStepsError,
    );

    if (areInputsValid) {
      storeObjectData('recipes', [
        ...currentRecipes,
        {
          title: title,
          products: products,
          steps: steps,
          selectedCategory: selectedCategory,
          id: getRecipeId(currentRecipes),
          selectedImageBase64: selectedImageBase64,
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

  const imageButtonText = selectedImageURI ? 'Change image' : 'Add image';

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

          <CategoryDropDownField
            title={'Category'}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <TouchableOpacity
            onPress={() =>
              pickImage(setSelectedImageURI, setSelectedImageBase64)
            }
            style={style.addImageButton}>
            <Text style={style.textButton}>{imageButtonText}</Text>
          </TouchableOpacity>

          {selectedImageURI && (
            <Image
              source={{uri: selectedImageURI}}
              style={style.selectedImage}
            />
          )}

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
