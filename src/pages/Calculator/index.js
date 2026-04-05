import { View } from "react-native";


export default function Calculator ({
    toggleTheme,
    isDark,
    children,
    props
}) {
    return (
        <View { ...props } >
            { children }
        </View>
    )
}
