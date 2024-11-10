import React, { useEffect, useState } from 'react';
import { Styles } from './styles'
import { NativeModules, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetch from 'src/hooks/useFetch';
import { Header } from 'Components/Headers';
import { TransactionsList } from 'Components/TransactionsLists';
import { Toast } from 'Components/Toasts';

const { DeviceLocale } = NativeModules;

export interface TransactionsListScreenProps {

}

export const TransactionsListScreen: React.FC<TransactionsListScreenProps> = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('') 
  const { data: user, error: userError } = useFetch('/user');
  const { data: balance, error: balanceUser } = useFetch('/balance');
  const { data: transactions, error: transactionError } = useFetch('/transactions-history');

  
  useEffect(() => {
    const checkFirstOpen = async () => {
      const hasSeenToast = await AsyncStorage.getItem('hasSeenToast');
      if (!hasSeenToast) {
        const locale = await DeviceLocale.getDeviceLocale()
        let msg = `Your phone language is set to ${locale}`
        setToastMsg(msg)
        setShowToast(true);
        await AsyncStorage.setItem('hasSeenToast', 'true');
      }
    };

    checkFirstOpen();
  }, []);

  const handleHideToast = () => {
    setShowToast(false);
  };

  return (
    <View style={Styles.container}>
        <Header
          balance={String(balance?.balance.toFixed(2) ?? '0,00')}
          userName={user?.name ?? 'Empty'}
          currency={balance?.currency}
        />
        <TransactionsList
          transactionHistory={transactions}
          showsVerticalScrollIndicator={false}  
        />
         {showToast && (
        <Toast
          message={toastMsg}
          onHide={handleHideToast}
        />
      )}
    </View>
  )
} 