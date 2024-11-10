import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.primary
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: theme.colors.white
    },
    Btn: {
        top: 30,
        backgroundColor: theme.colors.white,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    BtnTitle: {
        fontWeight: '600',
        textTransform: 'uppercase'
    }
})