import { Text as RNText } from "react-native";
import { getStyle } from "./style";
import { useFontsContext } from "../../contexts/FontContext";
import { useTheme } from "react-native-paper";


export default function Text({ 
    children, 
    variant = "default", 
    style, 
    ...props 
}) {

    const fontsLoaded = useFontsContext();
    const theme = useTheme();
    const styles = getStyle(fontsLoaded, theme);

    return (
        <RNText
            style={[
                styles.base,
                styles[variant],
                style
            ]}
            {...props}
        >
            {children}
        </RNText>
    );
}