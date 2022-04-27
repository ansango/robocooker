import { Bookmark, BookmarkPopulated } from "@/models/user/bookmark";

export interface BookmarkState {
  status: "idle" | "loading" | "failed";
  value: Bookmark | BookmarkPopulated | null;
}

export const initialState: BookmarkState = {
  status: "idle",
  value: null,
};
