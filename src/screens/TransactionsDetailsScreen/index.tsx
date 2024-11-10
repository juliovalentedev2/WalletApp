import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles'
import { RouteProp, useRoute } from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import { RootStackParamList } from 'src/navigation/navigation';


type TransactionsDetailsScreenRouteProp = RouteProp<RootStackParamList, 'TransactionsDetailsScreen'>;

export interface TransactionsDetailsScreenProps {

}

export const TransactionsDetailsScreen: React.FC<TransactionsDetailsScreenProps> = () => {
    const { params: { transactionId} } = useRoute<TransactionsDetailsScreenRouteProp>();
    const maskCardNumber = (number: string) => `**** **** **** ${number.slice(-4)}`;

    const { data: transaction } = useFetch(`/transactions/${transactionId}`)

    return (
        <>
            {
                transaction && (
                    <View style={styles.container}>
                            <View style={styles.ContainerImage}>
                                <Image 
                                    source={
                                        transaction.status === 'completed' &&
                                        require('../../assets/image/checked.png') || 
                                        transaction.status === 'pending' && require('../../assets/image/clock.png') ||
                                            transaction.status === 'failed' && require('../../assets/image/cancel.png')
                                    }
                                    style={styles.StatusImage}
                                />
                            </View>    
                            <View style={styles.section}>
                            <Text style={styles.label}>Date:</Text>
                            <Text style={styles.value}>{transaction?.date}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.label}>Type:</Text>
                            <Text style={styles.value}>{transaction?.type}</Text>
                        </View>
                
                        <View style={styles.section}>
                            <Text style={styles.label}>Amount:</Text>
                            <Text style={styles.value}>
                                {transaction?.currency} {transaction?.amount.toFixed(2)}
                            </Text>
                        </View>
                
                        <View style={styles.section}>
                            <Text style={styles.label}>Status:</Text>
                            <Text style={styles.value}>{transaction?.status}</Text>
                        </View>
                
                        <View style={styles.section}>
                            <Text style={styles.label}>Description:</Text>
                            <Text style={styles.value}>{transaction?.description}</Text>
                        </View>
                
                        <View style={styles.section}>
                            <Text style={styles.label}>From:</Text>
                            <Text style={styles.value}>
                                {transaction?.fromAccount.name} - {transaction?.fromAccount.accountNumber}
                            </Text>
                        </View>
            
                        <View style={styles.section}>
                            <Text style={styles.label}>To:</Text>
                            <Text style={styles.value}>
                                {transaction?.toAccount.name} - {transaction?.toAccount.accountNumber}
                            </Text>
                        </View>
                
                        <View style={styles.section}>
                            <Text style={styles.label}>Fee:</Text>
                            <Text style={styles.value}>
                                {transaction?.currency} {transaction?.fee.toFixed(2)}
                            </Text>
                        </View>
                        {transaction.creditCard && (
                            <View style={styles.creditCardContainer}>
                            <Text style={styles.creditCardTitle}>Credit Card Details</Text>
                            <View style={styles.section}>
                                <Text style={styles.label}>Brand:</Text>
                                <Text style={styles.value}>{transaction.creditCard.brand}</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.label}>Card Number:</Text>
                                <Text style={styles.value}>{maskCardNumber(transaction.creditCard.number)}</Text>
                            </View>
                            </View>
                        )}
                    </View>
        
                )
            }
        </>
    )
} 
