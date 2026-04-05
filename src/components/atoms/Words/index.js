import { Text } from "react-native";
import { getStyles } from "./style";
import { useFontsContext } from "../../../contexts/FontContext";


export default function Words ({
    children, 
    style, 
    ...props
}) {

    const { fontsLoaded } = useFontsContext(); 
    const styles = getStyles(fontsLoaded);

    return (
        <Text style={ [ styles.text, style ] } { ...props }> 
            { children }
        </Text>
    )
}
