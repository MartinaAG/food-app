import {Alert} from 'react-native';
import {RecipeDataType} from '../types/types';
import {launchImageLibrary} from 'react-native-image-picker';

export const getRecipeId = (currentRecipes: RecipeDataType[]): number => {
  let id = 0;
  const length = currentRecipes.length;

  if (length > 0) {
    const lastRecipeId = currentRecipes[length - 1].id;
    id = lastRecipeId + 1;
  }

  return id;
};

export const showAddedRecipeAlert = (): void => {
  Alert.alert('Recipe added', 'View all recipes in the Search menu', [
    {
      text: 'OK',
      onPress: () => console.log('OK Pressed'),
    },
  ]);
};

export const pickImage = (
  setSelectedImageURI: Function,
  setSelectedImageBase64: Function,
) => {
  launchImageLibrary(
    {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 200,
      maxWidth: 200,
    },
    response => {
      if (!response.didCancel && !response.error) {
        const uri = response?.assets?.[0]?.uri || '';
        setSelectedImageURI(uri);

        const base64 = response?.assets?.[0]?.base64 || '';
        setSelectedImageBase64(base64);
      }
    },
  );
};
