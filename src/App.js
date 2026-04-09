import { SafeAreaProvider } from "react-native-safe-area-context";
import Calculator from "./pages/Calculator";

import {  
  useFonts, 
  Poppins_400Regular, 
  Poppins_600SemiBold, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';

import { FontsProvider } from "./contexts/FontContext";
import { ThemeProvider } from "./contexts/ThemeContext";


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });


  return (
    <SafeAreaProvider>
      <FontsProvider fontsLoaded={fontsLoaded}>
        <ThemeProvider>
          <Calculator/>
        </ThemeProvider>
      </FontsProvider>
    </SafeAreaProvider>
  );
}
