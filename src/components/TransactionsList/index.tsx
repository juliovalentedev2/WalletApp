import React from "react";
import { Styles } from './styles';
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RegisterScreenNavigationProp } from "../../navigation/navigation";

export interface transactionsProps {
    id: string;
    date: string;
    type: string
    amount: number | string;
    currency: string;
    status: string;
    description?: string
    creditCard?: {
        number?: string;
        brand?: string;
    };
}

export interface TransactionsListProps {
    transactionHistory: transactionsProps[];
    showsVerticalScrollIndicator?: boolean
}

export const TransactionsList: React.FC<TransactionsListProps> = ({
    transactionHistory,
    showsVerticalScrollIndicator
}) => {
    const navigation = useNavigation<RegisterScreenNavigationProp>();

    const convertDatToIso = (dateString) => {
        let date = new Date(dateString)
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
        const year = date.getUTCFullYear() + 1;
        return `${day}/${month}/${year}`;    
    }
    
    return (
        <View style={Styles.ListContainer}>
            <FlatList
                data={transactionHistory}
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('TransactionsDetailsScreen', { transactionId: item.id})}
                        style={Styles.container}
                    >
                        <View style={Styles.CardRow}>
                            <Text style={Styles.SubTitle}>
                                {item.description}
                            </Text>
                            <Text style={Styles.SubTitle}>
                                {convertDatToIso(item.date)}
                            </Text>
                        </View>
                        <View style={Styles.CardRow}>
                            <Text style={Styles.SubTitle}>
                            Valor: {item.currency} {Number(item.amount).toFixed(2)}
                            </Text>
                            <Text style={Styles.SubTitle}>
                                {item.status}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}