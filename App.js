import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import { theme } from './src/utils/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Main() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
