import { SegmentedButtons, useTheme } from "react-native-paper"
import { getStyles } from "./style";


const SplitButtons = ({
    value,
    setValue,
    buttons,
    style,
    ...props
}) => {

    const theme = useTheme();
    const styles = getStyles();

    return (
        <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={buttons}
            style={[styles.splitedButton, style]}
            theme={theme}
            {...props}
        />
    )
}

export { SplitButtons as SegmentedButtons};