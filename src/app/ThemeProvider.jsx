import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectThemeMode } from '../features/theme/themeSlice';

export default function ThemeProvider({ children }) {
  const mode = useSelector(selectThemeMode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  return children;
}