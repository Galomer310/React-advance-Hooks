import { useContext } from "react";
import { ThemeModeContext } from "./AppThemeMode";


const Header = () => {
    const { mode, setMode } = useContext(ThemeModeContext);
    return (
        <>
        <h1 className={(mode === "light") ? "dark" : "light"}>This Is My Header</h1>
        <button onClick={() => setMode(mode => (mode === 'light') ? 'dark' : 'light')}
            >Change Mode: {(mode === 'light') ? 'Dark Mode' : 'Light Mode'}</button>
        </>
    );
};

export default Header;