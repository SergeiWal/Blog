import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () =>
  createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
const store = configureStore();

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
