import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
    ContainerImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    StatusImage: {
        width: 250,
        height: 250,
        marginBottom: 60,
    },
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: theme.colors.primary
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 12,
      color: theme.colors.white,
    },
    section: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    label: {
      fontSize: 16,
      color: theme.colors.white,
    },
    value: {
      fontSize: 16,
      color: theme.colors.white,
      fontWeight: 'bold',
    },
    creditCardContainer: {
      marginTop: 16,
      paddingTop: 8,
      borderTopWidth: 1,
      borderTopColor: '#ffffff50',
    },
    creditCardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffffcc',
      marginBottom: 8,
    },
  });