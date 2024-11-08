import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles'

export interface TransactionsDetailsScreenProps {

}

export const TransactionsDetailsScreen: React.FC<TransactionsDetailsScreenProps> = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>
                Transactions Details Screen
            </Text>
        </View>
    )
} 