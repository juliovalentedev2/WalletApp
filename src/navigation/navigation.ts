import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Auth: undefined; 
  TransactionsListScreen: undefined;
  TransactionsDetailsScreen: {transactionId: string}
};

export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth' | 'TransactionsListScreen' | 'TransactionsDetailsScreen'>;
export type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Auth' | 'TransactionsListScreen' | 'TransactionsDetailsScreen'>;
