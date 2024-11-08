import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './Auth.routes';
import { SignedRoutes } from './Signed.routes';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

export const Routes = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth); 
 
  return (
    <NavigationContainer>
      { 
        isAuthenticated ? <SignedRoutes /> : <AuthRoutes />
      }
    </NavigationContainer>
  );
};
