import { StyleSheet } from "react-native";
import { theme } from "src/theme";

export const styles = StyleSheet.create({
    toast: {
      position: 'absolute',
      bottom: 50,
      left: '10%',
      right: '10%',
      backgroundColor: theme.colors.purple,
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    message: {
      color: 'white',
      fontSize: 16,
    },
  });