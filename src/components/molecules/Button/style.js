import { StyleSheet } from "react-native";


export function getStyles(variant, theme){ 
    return StyleSheet.create({
        button: {
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.colors[variant] || colors.primary,
            padding: 10,
        }
    })
}
