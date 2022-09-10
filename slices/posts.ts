import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ObjectWithId } from "../types/generics";
import { PostData } from "../types/posts";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

type PostState = {
  post: null | PostData;
};

const initialState: PostState = {
  post: null,
};

const getPost = createAsyncThunk(
  "posts/getPost",
  async ({ params }: { params: ObjectWithId }) => {
    // const postData = await getPostData(params.id as number);
    // return postData;
  }
);

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export default {
  getPost,
};
