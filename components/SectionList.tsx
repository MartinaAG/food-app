import React, {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';

type SectionListProps = {
  recipes: DataType[];
};

type DataType = {
  title: string;
  products: string[];
  steps: string;
};

// section list shown on the search page listing all added recipes
const SectionList: FC<SectionListProps> = ({recipes}) => {
  return (
    <>
      {recipes?.map((recipe: DataType) => (
        <View style={styles.item} key={recipe?.title}>
          <Text style={styles.title}>{recipe?.title}</Text>

          {recipe?.products?.map(product => (
            <Text style={styles.title} key={product}>
              {product}
            </Text>
          ))}

          <Text style={styles.title}>{recipe?.steps}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    color: 'black',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
});

export default SectionList;
