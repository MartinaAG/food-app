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

type DataType = {
  title: string;
  products: string[];
  steps: string;
};

type SearchScreenType = {
  navigation: any;
};

const SearchScreen: FC<SearchScreenType> = ({navigation}) => {
  const [data, setData] = useState<DataType[]>([
    {title: '', products: [], steps: ''},
  ]);

  useEffect(() => {
    const updateItems = navigation.addListener('tabPress', () => {
      getObjectData('recipes').then((items: any[]) => {
        console.log(items);
        setData(items);
      });
    });

    return updateItems;
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
