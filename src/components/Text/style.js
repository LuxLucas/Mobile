import { StyleSheet } from "react-native";


export function getStyle(fontsLoaded, theme) {
    return StyleSheet.create({
        base: {
            fontFamily: fontsLoaded ? 'Poppins_400Regular' : undefined,
            color: theme.colors.text,
        },
        default: {
            fontSize: 24,
        },
        result: {
            fontSize: 42,
            fontFamily: fontsLoaded ? 'Poppins_600SemiBold' : undefined,
        },
        display: {
            fontSize: 32,
            opacity: 0.6,
        }
    })
}
