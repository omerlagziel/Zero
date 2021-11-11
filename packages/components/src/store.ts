import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

// import { api } from './services/api'
import menu from './features/menu/slice'

export const store = configureStore({
  reducer: {
    menu,
    // signup: signupReducer,

    // Add the generated reducer as a specific top-level slice
    // [api.reducerPath]: api.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
