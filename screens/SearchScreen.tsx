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

import {
  storeStringData,
  getStringData,
  storeObjectData,
  getObjectData,
} from '../ManageData';

type DataType = {
  title: string;
  products: string[];
  steps: string;
};

function SearchScreen() {
  const [data, setData] = useState<DataType[]>([
    {title: '', products: [], steps: ''},
  ]);

  useEffect(() => {
    getObjectData('MartyKarty2').then((e: any) => {
      console.log(e);
      setData([
        {
          title: JSON.stringify(e.title),
          products: e.products,
          steps: e.steps,
        },
      ]);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList recipes={data} />
    </SafeAreaView>
  );
}

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
