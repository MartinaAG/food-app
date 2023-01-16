import React, {FC} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import BaseComponent from '../BaseComponent';
import Section from '../Section';
import Header from '../Header';

const HomeScreen: FC<{}> = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.white,
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
