import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import likeReducer from "./likes";
import userReducer from './user'
import videosReducer from './videos'

const reducer = combineReducers({
    user: userReducer,
    videos: videosReducer,
    like: likeReducer
})
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user'],
}
const persistedReducer = persistReducer(persistConfig,reducer);
export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);