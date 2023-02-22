import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              // title: 'Homerer', //Set Header Title
              // headerStyle: {
              //   color: '#000', //Set Header color
              // },
              //headerTintColor: 'black', //Set Header text color
              // headerTitleStyle: {
              //   fontWeight: 'bold', //Set Header text style
              // },
              tabBarIcon: () => <Icon name="home" size={30} color="#000" />,
            }}
          />
          <Tab.Screen
            name="Saved"
            component={SearchScreen}
            options={{
              tabBarIcon: () => (
                <Icon name="bookmark-o" size={26} color="#000" />
              ),
            }}
          />
          <Tab.Screen
            name="Planner"
            component={SearchScreen}
            options={{
              tabBarIcon: () => (
                <Icon name="calendar-o" size={26} color="#000" />
              ),
            }}
          />
          <Tab.Screen
            name="Add Recipe"
            component={AddRecipeScreen}
            options={{
              tabBarIcon: () => (
                <Icon name="plus-circle" size={30} color="#000" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
