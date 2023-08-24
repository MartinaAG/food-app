import React, {FC, useState, useEffect} from 'react';
import {RecipeDataType, SectionListProps} from '../types/types';
import RecipeItem from './RecipeItem';
import {storeObjectData} from '../ManageData';

// section list shown on the search page listing all added recipes
const SectionList: FC<SectionListProps> = ({propRecipes}) => {
  const [recipes, setRecipes] = useState<RecipeDataType[]>(propRecipes);

  useEffect(() => {
    setRecipes(propRecipes);
  }, [propRecipes]);

  const deleteRecipeItem = (recipeTitle: string) => {
    let currentRecipes = recipes || [];

    const updatedRecipes = currentRecipes.filter(
      recipe => recipe.title !== recipeTitle,
    );

    storeObjectData('recipes', updatedRecipes);
    setRecipes(updatedRecipes);
  };

  return (
    <>
      {recipes?.map((recipe: RecipeDataType) => (
        <RecipeItem
          title={recipe?.title}
          products={recipe?.products}
          steps={recipe?.steps}
          selectedCategory={recipe?.selectedCategory}
          deleteRecipeItem={deleteRecipeItem}
        />
      ))}
    </>
  );
};

export default SectionList;
