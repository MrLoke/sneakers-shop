import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from 'features/userSlice'
import shopReducer from 'features/shopSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistUserConfig = {
  key: 'user',
  storage,
}

const persistedUserReducer = persistReducer(persistUserConfig, userReducer)

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    shop: shopReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store
