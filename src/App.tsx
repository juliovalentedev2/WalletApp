import 'react-native-gesture-handler';
import React from 'react';
import {Routes} from './routes';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';


const App = () => (
      <Provider store={store} >
            <PersistGate loading={null} persistor={persistor} >
                  <ThemeProvider>
                        <StatusBar style='light' />
                        <Routes />
                  </ThemeProvider>
            </PersistGate>
      </Provider>
);

export default App;
