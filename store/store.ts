import {
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { postSlice } from "../slices/posts";

const makeStore = () =>
  configureStore({
    reducer: {
      posts: postSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper(makeStore, { debug: true });