import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore,  persistReducer, PersistConfig} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './slices/authSlice';

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
};

const rootReducer = combineReducers({
    auth: authReducer
});

const persistReducerConfig = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReducerConfig,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });
  

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;