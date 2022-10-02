import React, {FC} from 'react';
import {ScrollView, StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import BaseComponent from '../BaseComponent';
import Section from '../Section';
import Header from '../Header';

const HomeScreen: FC<{}> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Let's cook!">
            <BaseComponent message="Created by MartyG" />
          </Section>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
