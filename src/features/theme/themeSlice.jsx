import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'theme';

const getSystemPreference = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'dark' || saved === 'light' ? saved : getSystemPreference();
  } catch {
    return getSystemPreference();
  }
};

const initialState = { mode: getInitialTheme() };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, state.mode);
      } catch {}
    },
    setTheme(state, action) {
      const next = action.payload === 'dark' ? 'dark' : 'light';
      state.mode = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const selectThemeMode = (state) => state.theme.mode;
export default themeSlice.reducer;