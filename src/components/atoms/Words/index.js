import { Text } from "react-native";
import { getStyles } from "./style";
import { useFontsContext } from "../../../contexts/FontContext";
import { useTheme } from "react-native-paper";


const Words = ({
    children, 
    style, 
    ...props
}) => {

    const theme = useTheme();
    const { fontsLoaded } = useFontsContext(); 
    const styles = getStyles(fontsLoaded, theme);

    return (
        <Text style={ [styles.text, style] } { ...props }> 
            { children }
        </Text>
    )
}

export { Words as Text }