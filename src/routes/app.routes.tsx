import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import CharacterDetail from '../pages/CharacterDetail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,

    }}>
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CharacterDetail" component={CharacterDetail} />
  </App.Navigator>
);

export default AppRoutes;