import React, {FC, useState, useEffect} from 'react';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import BaseComponent from '../BaseComponent';
import Section from '../Section';
import Header from '../Header';
import {
  storeStringData,
  getStringData,
  storeObjectData,
  getObjectData,
} from '../ManageData';

type DataType = {
  title: string;
  product: string;
  steps: string;
};

function SearchScreen() {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    getObjectData('First').then((e: DataType) => setData(e));
  }, []);

  return (
    <>
      <Text>{data?.title}</Text>
      <Text>{data?.product}</Text>
      <Text>{data?.steps}</Text>
    </>
  );
}

export default SearchScreen;
