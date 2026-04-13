import { StyleSheet } from "react-native"

export function getStyle(){
    return StyleSheet.create({
        view: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        }
    })
}