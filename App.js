import * as React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import { Store } from './src/redux/store';
import { theme } from './src/utils/theme';

export default function Main() {
  return (
      <Provider store={Store}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </Provider>
  );
}
