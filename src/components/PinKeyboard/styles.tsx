import { StyleSheet } from 'react-native';

export const Styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
      },
      pinDisplay: {
        fontSize: 32,
        letterSpacing: 10,
        marginBottom: 20,
        color: '#333',
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
        backgroundColor: '#ccc',
        borderRadius: 40,
      },
      keyText: {
        fontSize: 24,
        color: '#333',
      },
})