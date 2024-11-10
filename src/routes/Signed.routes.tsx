import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsListScreen } from '../screens/TransactionsListScreen';
import { TransactionsDetailsScreen } from '../screens/TransactionsDetailsScreen';
import { CustomNavigationHeader } from '../components/CustomNavigationHeader';
import { theme } from 'src/theme';


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
            options={({ navigation }) => ({
              headerLeft: () => (
                <CustomNavigationHeader
                  handlePress={() => navigation.goBack()}
                />
              ),
              title: 'Detlhes da Transação',
              headerTitleStyle: {
                color: theme.colors.white
              },
              headerShown: true, 
              headerStyle: {
                backgroundColor: theme.colors.primary
              }
            })}
            name="TransactionsDetailsScreen"
            component={TransactionsDetailsScreen} 
          />
      </Stack.Navigator>
  );
};

