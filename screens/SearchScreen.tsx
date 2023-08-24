import React, {FC, useState, useEffect, useRef} from 'react';
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
  const [data, setData] = useState<RecipeDataType[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  const updateRecipes = () => {
    getObjectData('recipes').then((items: any[]) => {
      items.sort((a, b) => b.id - a.id);
      setData(items);
    });
  };

  // on component mount
  useEffect(() => {
    updateRecipes();
    scrollViewRef.current!.scrollTo({x: 0, y: 0, animated: false});
  }, []);

  useEffect(() => {
    navigation.addListener('tabPress', () => {
      updateRecipes();
      scrollViewRef.current!.scrollTo({x: 0, y: 0, animated: false});
    });
  }, [navigation]);

  return (
    <ScrollView ref={scrollViewRef}>
      <SafeAreaView style={styles.container}>
        <SectionList propRecipes={data} />
      </SafeAreaView>
    </ScrollView>
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
