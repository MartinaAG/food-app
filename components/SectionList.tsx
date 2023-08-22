import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RecipeDataType, SectionListProps} from '../types/types';
import RecipeItem from './RecipeItem';

// section list shown on the search page listing all added recipes
const SectionList: FC<SectionListProps> = ({recipes}) => {
  return (
    <>
      {recipes?.map((recipe: RecipeDataType) => (
        <RecipeItem
          title={recipe?.title}
          products={recipe?.products}
          steps={recipe?.steps}
          selectedCategory={recipe?.selectedCategory}
        />
      ))}
    </>
  );
};

export default SectionList;
