import { StyleSheet } from 'react-native';
import { theme } from 'src/theme';

export const Styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      pinDisplay: {
        fontSize: 32,
        letterSpacing: 10,
        marginBottom: 20,
      },
      keyboardContainer: {
        width: '100%',
        maxWidth: 300,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      keyButton: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  theme.colors.secondary,
        borderRadius: 40,
      },
      keyText: {
        fontSize: 24,
        fontWeight: '600',
        color: theme.colors.white,
      },
})