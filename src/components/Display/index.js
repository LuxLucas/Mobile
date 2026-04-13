import { View } from "react-native";
import Row from "./Row";
import getStyle from "./style";


function Display({
    style,
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

Display.Row = Row;

export default Display;