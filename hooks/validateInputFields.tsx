import {Recipe} from '../types/types';

const validateInputFields = (
  currentRecipes: Recipe[],
  title: string,
  products: string[],
  steps: string,
  setTitleError: Function,
  setProductsError: Function,
  setStepsError: Function,
): boolean => {
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

export default validateInputFields;
