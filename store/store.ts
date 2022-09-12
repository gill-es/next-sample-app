import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { postSlice } from "../slices/posts";

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppDispatch = typeof store.dispatch;

const reducer = combineReducers({
  posts: postSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: [ReduxThunk],
});

export const wrapper = createWrapper(() => store, { debug: true });

export default store;
