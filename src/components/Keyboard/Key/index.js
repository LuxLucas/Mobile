import { TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import { getStyles } from "./style";
import Text from "../../Text";


export default function Key({
    style,
    variant,
    activeOpacity = .65,
    label,
    ...props
}){

    const theme = useTheme();
    const styles = getStyles(variant, theme);

    return (
        <TouchableOpacity style={[styles.touch, style]} activeOpacity={activeOpacity} {...props}>
            <View style={[styles.inner, styles.variants[variant], style]}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}
