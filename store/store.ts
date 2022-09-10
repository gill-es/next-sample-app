import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { posts } from "../slices/posts";

const reducer = combineReducers({
  posts: posts.reducer,
});

const store = configureStore({
  reducer,
  middleware: [ReduxThunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });

export default store;
