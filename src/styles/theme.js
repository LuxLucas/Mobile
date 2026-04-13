import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";


const constants = {
  primary: '#4b5dfcff',
};

function applyFonts (baseTheme, fontsLoaded) {
    return {
    ...baseTheme,
    fonts: fontsLoaded 
        ? {
            ...baseTheme.fonts,
            bodyLarge: { fontFamily: 'Poppins_600SemiBold' },
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
      secondary: '#D2D3DA',
      tertiary: '#FAFAFA',
      background: '#F1F2F3',
      text: '#010101', 
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
      secondary: '#4E505F',
      tertiary: '#2E2F38',
      background: '#17171C',
      text: '#FAFAFA',
    }
  };

  return applyFonts(base, fontsLoaded);
};
