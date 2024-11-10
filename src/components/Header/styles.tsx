import { Dimensions, StyleSheet } from "react-native";
import { theme } from "src/theme";

const { width, height } = Dimensions.get('screen')

export const Styles = StyleSheet.create({
    container: {
        width: width,
        height: height / 2.8,
        borderBottomEndRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: theme.colors.purple
    },
    AvatarContainer: {
        top: 40,
        width:  width / 5,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        width: 78,
        height: 78
    },
    userTitle: {
        fontSize: 20,
        width: 100,
        left: 10,
        fontWeight: '700',
        color: theme.colors.white
    },
    balanceView: {
        justifyContent: 'center',
        alignItems: 'center',
        top: height / 14
    },
    balanceTitle: {
        color: theme.colors.white,
        fontWeight: '700',
        fontSize: 50,
    }
})