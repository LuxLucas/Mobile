import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { getStyles } from "./style";


export default function Button({
    style,
    variant = 'primary',
    activeOpacity = .8,
    children,
    ...props
}){

    const theme = useTheme();
    const styles = getStyles(variant, theme);

    return (
        <TouchableOpacity 
            style={[styles.button, style]}
            activeOpacity={activeOpacity} 
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}
