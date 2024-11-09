import React, { useEffect, useState } from 'react';
import { Styles } from './styles'
import { NativeModules, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetch from '../../hooks/useFetch';

import { Toas } from '../../components/Toast';
import { Header } from '../../components/Header';
import { TransactionsList } from '../../components/TransactionsList';

const { DeviceLocale } = NativeModules;

export interface TransactionsListScreenProps {

}

export const TransactionsListScreen: React.FC<TransactionsListScreenProps> = () => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string>('') 
  const { data: user } = useFetch('/user');
  const { data: balance } = useFetch('/balance');
  const { data: transactions } = useFetch('/transactions-history');

  
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
  console.log('===transactions', transactions)
  const handleHideToast = () => {
    setShowToast(false);
  };

  return (
    <View style={Styles.container}>
        <Header
          balance={String(balance?.balance.toFixed(2))}
          userName={user?.name}
          currency={balance?.currency}
        />
        <TransactionsList
          transactionHistory={transactions}
          showsVerticalScrollIndicator={false}  
        />
         {showToast && (
        <Toas
          message={toastMsg}
          onHide={handleHideToast}
        />
      )}
    </View>
  )
} 