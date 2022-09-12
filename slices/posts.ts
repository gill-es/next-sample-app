import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppDispatch, AppThunk } from "../store/store";
import { PostData } from "../types/posts";

const initialState: any = {};

const fetchPost =
  (post: PostData): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(postSlice.actions.post(post));
  };

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    post(state, action) {
      return {
        ...state,
        post: action.payload,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      const nextState = { ...state };

      if (action.payload.posts) {
        const { post } = action.payload.posts;
        nextState.post = post;
      }

      return {
        ...state,
        ...nextState,
      };
    },
  },
});

export default {
  fetchPost,
};
