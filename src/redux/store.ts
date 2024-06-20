import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkMiddleware, thunk } from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { userDetailsSlice } from './feature/authentication';

const middleware = [thunk as ThunkMiddleware]; // Use ThunkMiddleware type

export const rootReducers = combineReducers({
    userDetails: userDetailsSlice
})

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducers,
    devTools: process.env.NODE_ENV !== "production",
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side
    const persistConfig = {
      key: "root",
      storage,
      timeout: 500, // Set a longer timeout in milliseconds (e.g., 10 seconds)
      blacklist: ["table", "steps", "module", "talkingPoint"],
    };
    const persistedReducer = persistReducer(persistConfig, rootReducers);
    const store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(middleware),
    });
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
};

export type RootState = ReturnType<typeof rootReducers>;
// Define the type for the store returned by makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: UseSelector<RootState> = useSelector;

export const wrapper = createWrapper(makeStore);