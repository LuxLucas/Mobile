import { StyleSheet } from "react-native";


export  function getStyle(){ 
    return StyleSheet.create({
        view: {
            paddingHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
        }
    });
}
