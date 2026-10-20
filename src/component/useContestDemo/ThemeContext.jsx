import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [color, setColor] = useState('white');

  const changeColor = () => {
    setColor((prev) => (prev === 'white' ? 'lightblue' : 'white'));
  };

  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
