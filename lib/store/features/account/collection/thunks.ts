import {
  onGetCollectionService,
  onDeleteCollectionService,
} from "@/services/bookmark";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCollection = createAsyncThunk(
  "collection/getCollection",
  async (id: CollectionId) => {
    const response = await onGetCollectionService(id);
    return response;
  }
);

export const deleteCollection = createAsyncThunk(
  "collection/deleteCollection",
  async (id: CollectionId) => {
    const response = await onDeleteCollectionService(id);
    return response;
  }
);
