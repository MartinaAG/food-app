import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: '100%',
    height: 250,
  },
});

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./images/header-image.jpg')}
      />
    </View>
  );
};

export default Header;
