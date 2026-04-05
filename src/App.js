import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import Calculator from "./pages/Calculator";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { getDarkTheme, getLightTheme } from './styles/theme';
import { FontsProvider } from "./contexts/FontContext";
import Words from "./components/atoms/Words";


export default function App() {

  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const theme = isDark
    ? getDarkTheme(fontsLoaded)
    : getLightTheme(fontsLoaded);

  return (
    <SafeAreaProvider>
      <FontsProvider fontsLoaded={fontsLoaded}>
        <PaperProvider theme={theme}>
          <Calculator toggleTheme={toggleTheme} isDark={isDark} />
        </PaperProvider>
      </FontsProvider>
    </SafeAreaProvider>
  );
}
