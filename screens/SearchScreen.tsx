import React, {FC, useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import SectionList from '../components/SectionList';

import {getObjectData} from '../ManageData';
import {RecipeDataType, SearchScreenType} from '../types/types';

const SearchScreen: FC<SearchScreenType> = ({navigation}) => {
  const [data, setData] = useState<RecipeDataType[]>([
    {title: '', products: [], steps: '', category: ''},
  ]);

  const updateRecipes = () => {
    getObjectData('recipes').then((items: any[]) => {
      setData(items);
    });
  };

  // on component mount
  useEffect(() => {
    updateRecipes();
  }, []);

  useEffect(() => {
    navigation.addListener('tabPress', () => {
      updateRecipes();
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList recipes={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});

export default SearchScreen;
