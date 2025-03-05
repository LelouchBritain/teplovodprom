// import { rootReducer } from './rootReducer';
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['user'],
// };

// const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
//   persistConfig,
//   rootReducer,
// );

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
