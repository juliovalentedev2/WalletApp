import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.colors.white,
    },
    pinInput: {
        width: 100,
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.white
    }
})