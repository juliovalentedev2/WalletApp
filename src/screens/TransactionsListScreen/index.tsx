import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Styles } from './styles'
import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header';
import { TransactionsList } from '../../components/TransactionsList';
import useFetch from '../../hooks/useFetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toas } from '../../components/Toast';
import { useTranslation } from 'react-i18next';

export interface TransactionsListScreenProps {

}

export const TransactionsListScreen: React.FC<TransactionsListScreenProps> = () => {
  const { t } = useTranslation()
  const [showToast, setShowToast] = useState(false);
  const { data: user } = useFetch('/user');
  const { data: balance } = useFetch('/balance');
  const { data: transactions } = useFetch('/transactions-history');

  useEffect(() => {
    const checkFirstOpen = async () => {
      const hasSeenToast = await AsyncStorage.getItem('hasSeenToast');
      if (!hasSeenToast) {
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
          message={t('languageMessage')}
          onHide={handleHideToast}
        />
      )}
    </View>
  )
} 