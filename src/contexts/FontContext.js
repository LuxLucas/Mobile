import { createContext, useContext } from "react";


const FontsContext = createContext();

function FontsProvider ({
    children,
    fontsLoaded
}) {
    return (
        <FontsContext.Provider value={{fontsLoaded}}>
            { children }
        </FontsContext.Provider>
    )
}

const useFontsContext = () => useContext(FontsContext);


export { FontsProvider, useFontsContext };
