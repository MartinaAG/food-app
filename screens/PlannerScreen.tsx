import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';

import style from './AddRecipeScreen.scss';

const PlannerScreen: FC<{}> = () => {
  return (
    <View style={style.wrapperView}>
      <ScrollView style={style.scrollView}>
        <View style={style.inlineView}>
          <Text>Planner</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlannerScreen;
