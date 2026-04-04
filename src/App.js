import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { darkTheme, lightTheme } from "./styles/theme";
import { useState } from "react";
import Calculator from "./screens/Calculator";


export default function App() {

  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={isDark ? darkTheme : lightTheme}>
        <Calculator toggleTheme={toggleTheme} isDark={isDark} />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
