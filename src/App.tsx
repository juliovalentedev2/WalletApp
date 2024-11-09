import 'react-native-gesture-handler';
import React from 'react';
import {Routes} from './routes';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './localize/i18n';

const App = () => (
      <Provider store={store} >
            <PersistGate loading={null} persistor={persistor} >
                  <I18nextProvider i18n={i18n}>
                        <ThemeProvider>
                              <StatusBar style='light' />
                              <Routes />
                        </ThemeProvider>
                  </I18nextProvider>
            </PersistGate>
      </Provider>
);

export default App;
