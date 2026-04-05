import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";


const constants = {
  primary: '#3C6E71',
  secondary: '#353535',
  tertiary: '#FAFAFA',
};

function applyFonts (baseTheme, fontsLoaded) {
    return {
    ...baseTheme,
    fonts: fontsLoaded 
        ? {
            ...baseTheme.fonts,
            bodyLarge: { fontFamily: 'Poppins_400Regular' },
            headlineLarge: { fontFamily: 'Poppins_700Bold' },
        }
        : baseTheme.fonts,
    }
};

export function getLightTheme (fontsLoaded) {
  const base = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...constants,
      background: '#FAFAFA',
      surface: '#F0EFEF',
      onBackground: '#010101',
      onSurface: '#010101',
    }
  };

  return applyFonts(base, fontsLoaded);
};

export function getDarkTheme (fontsLoaded) {
  const base = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...constants,
      background: '#6F9395',
      surface: '#3D6063',
      onBackground: '#FAFAFA',
      onSurface: '#FAFAFA',
    }
  };

  return applyFonts(base, fontsLoaded);
};
