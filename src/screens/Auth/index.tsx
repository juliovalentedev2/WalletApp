import React, { useState } from 'react';
import { Styles } from './styles';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PinKeyboard } from '../../components/PinKeyboard';
import { RootState } from '../../redux/store';
import { authenticate } from '../../redux/store/slices/authSlice';

export interface AuthProps {}

export const Auth: React.FC<AuthProps> = () => {
  const dispatch = useDispatch();
  const storedPin = useSelector((state: RootState) => state.auth.pin); 
  const [pin, setInputPin] = useState('');

  const handleKeyPress = (num: number) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setInputPin(newPin);
    }
  };
  
  const handleDelete = () => {
    setInputPin(pin.slice(0, -1));
  };

  const handleAuth = () => {
    dispatch(authenticate({
      isAuthenticated: !storedPin || storedPin === pin,
      pin: storedPin || pin,
    }));
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>
        {pin.padEnd(4, '*')}</Text>
      <PinKeyboard 
        onKeyPress={handleKeyPress}
        onDelete={handleDelete}
        onSubmit={handleAuth} 
      />
    </View>
  );
};