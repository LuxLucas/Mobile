import { StyleSheet } from "react-native"

export function getStyle(){
    return StyleSheet.create({
        view: {
            flexDirection: 'row',
            width: '100%',
            flex: 1,
        }
    })
}