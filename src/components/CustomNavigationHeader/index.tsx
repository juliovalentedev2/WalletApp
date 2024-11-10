import React from 'react';
import { Styles } from './styles'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from 'src/theme';

export interface CustomNavigationProps {
    handlePress: () => void
}

export const CustomNavigationHeader: React.FC<CustomNavigationProps> = ({
    handlePress
}) => {
    return (
        <TouchableOpacity 
            onPress={handlePress}
            style={Styles.Button}
        >
            <AntDesign 
                name="arrowleft"
                size={24} 
                color={theme.colors.white}
            />
        </TouchableOpacity>
    )
}