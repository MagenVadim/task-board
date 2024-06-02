import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from './taskSlice';
import userReducer from './userSlice';
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//     reducer:{
//         taskReducer: taskReducer,
//         userReducer: userReducer,
//     },
// });

// const persistConfig = {
//     key: 'root',
//     storage,
//   };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }),
// });

// export const persistor = persistStore(store);
// export default store;

export default configureStore({
  reducer:{
    taskReducer: taskReducer,
    userReducer: userReducer,
},
})

