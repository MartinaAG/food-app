import React from 'react';
import {ScrollView, StatusBar, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import BaseComponent from '../BaseComponent';
import Section from '../Section';
import Header from '../Header';

function SearchScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return <Text>Martiii</Text>;
}

export default SearchScreen;
