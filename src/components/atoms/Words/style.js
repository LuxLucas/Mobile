import { StyleSheet } from "react-native";


export function getStyles(fontsLoaded) {
    return StyleSheet.create({
        text: {
            fontFamily: fontsLoaded ? 'Poppins_700Bold' : undefined,
            fontSize: 20,
        }
    })
}
