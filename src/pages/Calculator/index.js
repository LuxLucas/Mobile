import { View } from "react-native";
import { getStyle } from './style';


export default function Calculator({
    style,
    children,
    ...props
}) {

    const styles = getStyle();

    return (
        <View 
            style={[styles.view, style]} 
            { ...props }
        >
            { children }
        </View>
    )
}
