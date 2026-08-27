import React from 'react';

import {
  ThemeProvider,
} from './src/context/ThemeContext';

import {
  LanguageProvider,
} from './src/context/LanguageContext';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;