import React, {FC} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {CircleImageInputType} from '../types/types';

const CircleImage: FC<CircleImageInputType> = ({source, size}) => {
  return (
    <View style={[styles.circle, {width: size, height: size}]}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100, // Half of the width and height to create a circle
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CircleImage;
