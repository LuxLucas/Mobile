import { StyleSheet } from "react-native";


export  function getStyle(colors){ 
    return StyleSheet.create({
        view: {
            height: '100%',
            width: '100%',
            flex: 1,
            justifyContent: 'space-evenly',
            backgroundColor: colors.background,
        }
    });
}
