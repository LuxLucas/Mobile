import { View } from "react-native";
import { getStyle } from "./style";
import Row from "./Row";
import Key from "./Key";

function Keyboard({
    style,
    label,
    children,
    ...props
}){

    const styles = getStyle();

    return (
        <View style={[styles.view, style]} {...props}>
            {children}
        </View>
    )
}

Keyboard.Row = Row;
Keyboard.Key = Key;

export default Keyboard;
