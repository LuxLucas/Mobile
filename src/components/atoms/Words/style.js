import { StyleSheet } from "react-native";


export function getStyles(fontsLoaded, theme) {
    return StyleSheet.create({
        text: {
            fontFamily: fontsLoaded ? 'Poppins_600SemiBold' : undefined,
            fontSize: 20,
            color: theme.colors.text,
        }
    })
}
