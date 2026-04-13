import { View, StatusBar } from "react-native";
import { getStyle } from './style';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch, useTheme } from "react-native-paper";

import Keyboard from "../../components/Keyboard";
import Display from "../../components/Display";
import Text from "../../components/Text";
import { useThemeContext } from "../../contexts/ThemeContext";


export default function Calculator() {

    const {isDarkTheme, toggleTheme} = useThemeContext();
    const {colors} = useTheme();
    const styles = getStyle(colors);

    return (
        <>
            <StatusBar
                barStyle={isDarkTheme ? "light-content" : "dark-content"}
                backgroundColor={colors.background}
            />
            <View style={styles.view}>
                <Display>
                    <Display.Row style={{alignItems: 'center', gap: 10, marginTop: 10}}>
                        <MaterialCommunityIcons
                            name="white-balance-sunny"
                            size={20}
                            color={isDarkTheme ? "#888" : "#f5c542"}
                        />
                        <Switch
                            value={isDarkTheme}
                            onValueChange={toggleTheme}
                        />
                        <MaterialCommunityIcons
                            name="moon-waning-crescent"
                            size={20}
                            color={isDarkTheme ? "#7aa2f7" : "#888"}
                        />
                    </Display.Row>
                    <Display.Row style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text variant="display" ellipsizeMode="head" numberOfLines={1}>
                            1234567890
                        </Text>
                    </Display.Row>
                    <Display.Row>
                        <Text variant="result" ellipsizeMode="head" numberOfLines={1}>
                            12345
                        </Text>
                    </Display.Row>
                </Display>
                <Keyboard>
                    <Keyboard.Row>
                        <Keyboard.Key variant='expresion' label='C'/>
                        <Keyboard.Key variant='expresion' label='('/>
                        <Keyboard.Key variant='expresion' label=')'/>
                        <Keyboard.Key variant='operator' label='÷'/>
                    </Keyboard.Row>
                    <Keyboard.Row>
                        <Keyboard.Key variant='number' label='7'/>
                        <Keyboard.Key variant='number' label='8'/>
                        <Keyboard.Key variant='number' label='9'/>
                        <Keyboard.Key variant='operator' label='×'/>
                    </Keyboard.Row>
                    <Keyboard.Row>
                        <Keyboard.Key variant='number' label='4'/>
                        <Keyboard.Key variant='number' label='5'/>
                        <Keyboard.Key variant='number' label='6'/>
                        <Keyboard.Key variant='operator' label='+'/>
                    </Keyboard.Row>
                    <Keyboard.Row>
                        <Keyboard.Key variant='number' label='1'/>
                        <Keyboard.Key variant='number' label='2'/>
                        <Keyboard.Key variant='number' label='3'/>
                        <Keyboard.Key variant='operator' label='-'/>
                    </Keyboard.Row>
                    <Keyboard.Row>
                        <Keyboard.Key variant='number' label='0' style={{flex: 2}}/>
                        <Keyboard.Key variant='number' label=','/>
                        <Keyboard.Key variant='operator' label='='/>
                    </Keyboard.Row>
                </Keyboard>
            </View>
        </>
    )
}
