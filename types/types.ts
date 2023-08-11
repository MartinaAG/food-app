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
};

export type SectionListProps = {
  recipes: RecipeDataType[];
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

export type RecipeItem = {
  title: string;
  data: string[];
};
