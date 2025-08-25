/* eslint-disable react-refresh/only-export-components */
import React,{createContext, useState} from 'react';
export const ThemeContext = createContext({
    theme : 'dark',
    toggleTheme: () => {}
});
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}