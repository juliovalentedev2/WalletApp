import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from '../screens/Auth';

const Stack = createStackNavigator();

export const AuthRoutes = () => {
  return (
      <Stack.Navigator
        id={undefined}
        screenOptions={{
          headerShown: false
        }}
      >
          <Stack.Screen name="auth" component={Auth} />
      </Stack.Navigator>
  );
};

