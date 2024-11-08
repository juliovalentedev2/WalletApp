import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './styles'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/store/slices/authSlice';

export interface TransactionsListScreenProps {

}

export const TransactionsListScreen: React.FC<TransactionsListScreenProps> = () => {
  const dispatch = useDispatch()

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>
                Transactions List Screen
            </Text>
            <TouchableOpacity 
              onPress={() => dispatch(logout())}
              style={Styles.Btn}
            >
              <Text style={Styles.BtnTitle}>
                Sair
              </Text>
            </TouchableOpacity>
        </View>
    )
} 