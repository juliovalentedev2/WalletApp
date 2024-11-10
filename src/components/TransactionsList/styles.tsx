import { Dimensions, StyleSheet } from 'react-native'
import { theme } from 'src/theme'

const { height, width } = Dimensions.get('screen')

export const Styles = StyleSheet.create({
    ListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    container: {
        top: 25,
        marginTop: 20,
        width: width / 1.111,
        height: height / 7,
        backgroundColor: theme.colors.secondary,
        opacity: 1,
        justifyContent: 'center',
        elevation: 2,
        borderRadius: 15,
    },
    CardRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    Title: {
        color: theme.colors.white,
        fontWeight: '600',
        fontSize: 20
    },
    SubTitle: {
        fontSize: 15,
        marginTop: 10,
        fontWeight: '600',
        color: theme.colors.white
    }
})