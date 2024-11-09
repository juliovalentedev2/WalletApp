import React from 'react';
import { TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import AntDesign from '@expo/vector-icons/AntDesign';

import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsListScreen } from '../screens/TransactionsListScreen';
import { TransactionsDetailsScreen } from '../screens/TransactionsDetailsScreen';
import { CustomNavigationHeader } from '../components/CustomNavigationHeader';


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

