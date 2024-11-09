import React from 'react';
import { Image, Text, View } from 'react-native';
import { Styles } from './styles';


export interface HeaderProps {
    userName: string;
    balance: string;
    currency?: string
}

export const Header: React.FC<HeaderProps> = ({
    userName,
    balance,
    currency
}) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.AvatarContainer}>
                <Image
                    style={Styles.avatar}
                    source={require('../../assets/image/avatar.png')}
                />
                <Text style={Styles.userTitle} >
                    {userName}
                </Text>
            </View>
            <View style={Styles.balanceView}>
                <Text style={Styles.balanceTitle}>
                   {currency} {balance}
                </Text>
            </View>
        </View>
    )
}