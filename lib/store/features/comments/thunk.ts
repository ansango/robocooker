import { CommentDAO } from "@/models/recipe/comment";
import {
  onGetCommentsService,
  onPostCommentService,
} from "@/services/comments";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (recipeId: RecipeId) => {
    const response = await onGetCommentsService(recipeId);
    return response;
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment: CommentDAO) => {
    const response = await onPostCommentService(comment);
    return response;
  }
);
