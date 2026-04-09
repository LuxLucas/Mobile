import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { getStyles } from "./style";
import { Text } from "../../atoms/Words";


export default function Button({
    style,
    variant = 'primary',
    activeOpacity = .8,
    title,
    ...props
}){

    const theme = useTheme();
    const styles = getStyles(variant, theme);

    return (
        <TouchableOpacity 
            style={[styles.button, style]}
            activeOpacity={activeOpacity}
            title
            {...props}
        >
            <Text style={styles.text}> 
                {title} 
            </Text>
        </TouchableOpacity>
    )
}
