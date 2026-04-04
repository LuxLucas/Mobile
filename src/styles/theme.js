import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";


const constants = {
    primary: '#3C6E71',
    secondary: '#353535',
    tertiary: '#FAFAFA',
}

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...constants,
        background: '#FAFAFA',
        surface: '#F0EFEF',
        text: '#010101',
    }
}

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...constants,
        background: '#6F9395',
        surface: '#3D6063',
        text: '#FAFAFA',
    }
}
