import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchBar from './src/components/SearchBar';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
        <Stack.Screen name="Bar" component={SearchBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;