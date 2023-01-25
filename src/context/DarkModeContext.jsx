import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

// 하위 컴포넌트들을 감싸고 있는 상위 component라고 할 수 있다.
export function DarkModeProvider({ childeren }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={(darkMode, toggleDarkMode)}>
      {childeren}
    </DarkModeContext.Provider>
  );
}
