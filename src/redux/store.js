import { configureStore } from "@reduxjs/toolkit";
import { middleware, reducer } from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer,
  middleware,
});

export const persistor = persistStore(store);
