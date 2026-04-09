import { createContext, useContext, useState } from "react";
import { PaperProvider} from "react-native-paper";
import { getDarkTheme, getLightTheme } from "../styles/theme";
import { useFontsContext } from "./FontContext";


const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme((prev) => !prev);
    const { fonstsLoaded } = useFontsContext();
    const theme = isDarkTheme ? getDarkTheme(fonstsLoaded) : getLightTheme(fonstsLoaded);

    return (
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            <PaperProvider theme={theme}>
                {children}
            </PaperProvider>
        </ThemeContext.Provider>
    )
}

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };