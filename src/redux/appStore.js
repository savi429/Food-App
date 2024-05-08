import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
  reducer: {
    // like combine reducer
    //cart: cartReducer
    reducer: persistedReducer,
    middleware: [thunk],

    // user: userReducer,
  },
});
export const persistedStore = persistStore(appStore);
