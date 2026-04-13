import { ActivityIndicator } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Calculator from "./pages/Calculator";

import {  
  useFonts, 
  Poppins_400Regular, 
  Poppins_600SemiBold, 
} from '@expo-google-fonts/poppins';

import { FontsProvider } from "./contexts/FontContext";
import { ThemeProvider } from "./contexts/ThemeContext";


export default function App() {

  const fontsLoaded = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if(!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large'/>
      </View>
    );
  }

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
