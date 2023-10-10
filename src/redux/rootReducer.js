import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./Cars/carsSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import FavoriteSlice from "./Favorite/FavoriteSlice";

const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favoriteCars"],
};

export const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const reducer = combineReducers({
  favorite: persistReducer(persistConfig, FavoriteSlice),
  carsList: carsReducer,
});
