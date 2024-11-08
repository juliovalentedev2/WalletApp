import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsListScreen } from '../screens/TransactionsListScreen';
import { TransactionsDetailsScreen } from '../screens/TransactionsDetailsScreen';

const Stack = createStackNavigator();

export const SignedRoutes = () => {
  return (
      <Stack.Navigator
        id={undefined}
        screenOptions={{
          headerShown: false
        }}
      >
          <Stack.Screen
            name="TransactionsListScreen"
            component={TransactionsListScreen} 
          />
          <Stack.Screen 
            name="TransactionsDetailsScreen"
            component={TransactionsDetailsScreen} 
          />
      </Stack.Navigator>
  );
};

