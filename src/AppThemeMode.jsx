import { useState, createContext} from 'react'
import "./AppThemeMode.css"
import Header from "./Header";

export const ThemeModeContext = createContext();

const AppThemeMode = () => {
    const [mode, setMode] = useState("light");

    return (
        <>
        <ThemeModeContext.Provider value={{ mode, setMode }}>
        <Header/>
        </ThemeModeContext.Provider>
        </>
    );
};

export default AppThemeMode;