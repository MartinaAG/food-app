import {ImageSourcePropType} from 'react-native';

export type Recipe = {
  title: string;
  products: string[];
  steps: string;
};

export type RecipeDataType = {
  title: string;
  products: string[];
  steps: string;
  selectedCategory: string;
  id: number;
};

export type RecipeItemProps = RecipeDataType & {
  deleteRecipeItem: Function;
};

export type SectionListProps = {
  propRecipes: RecipeDataType[];
};

export type SearchScreenType = {
  navigation: any;
};

export type AddRecipeInputFieldType = {
  title: string;
  value: string;
  handleChange: Function;
  error: boolean;
  errorMessage: string;
};

export type AddRecipeProductInputFieldType = {
  title: string;
  handleChange: (newText: string, index: number) => void;
  products: string[];
  error: boolean;
  errorMessage: string;
  updateProducts: () => void;
};

export type CategoryDropDownFieldType = {
  title: string;
  selectedCategory: string;
  setSelectedCategory: (itemValue: string) => void;
};

export type CircleImageInputType = {
  source: ImageSourcePropType;
  size: number;
};
