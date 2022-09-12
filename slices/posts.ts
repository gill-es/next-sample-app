import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppThunk } from "../store/store";
import { PostData } from "../types/posts";

const initialState: any = {};

const fetchPost =
  (post: PostData): AppThunk =>
  async (dispatch) => {
    dispatch(postSlice.actions.post(post));
  };

const fetchPosts =
  (posts: PostData[]): AppThunk =>
  async (dispatch) => {
    dispatch(postSlice.actions.posts(posts));
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
    posts(state, action) {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      const nextState = { ...state };

      if (action.payload.posts) {
        const { posts, post } = action.payload.posts;
        nextState.posts = posts;
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
  fetchPosts,
};
