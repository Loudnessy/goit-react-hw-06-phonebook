import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slices/contactsSlice";
import { filterReducer } from "./slices/filterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)
export const store = configureStore(
    {
        reducer: {
           contacts: persistedContactsReducer,
           filter: filterReducer
        }
    }
);
export const persistor = persistStore(store)
