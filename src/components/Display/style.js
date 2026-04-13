import { StyleSheet } from "react-native";


export default function getStyle(){
    return StyleSheet.create({
        view: {
            width: '100%',
            padding: 20,
            justifyContent: 'space-between',
            flex: 1,
        }
    })
}