import { StyleSheet } from "react-native";


export function getStyles(variant, {colors}){ 
    return StyleSheet.create({
        touch: {
            flex: 1,
        },
        inner: {
            flex: 1,
            margin: 4,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },
        variants: {
            operator:{
                backgroundColor: colors.primary,
            },
            expresion: {
                backgroundColor: colors.secondary,
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, .2)'
            },
            number: {
                backgroundColor: colors.tertiary,
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, .2)'
            },
        },
        text: {
            color: variant !== 'operator' ? colors.text : '#fff',
        },
    })
}
