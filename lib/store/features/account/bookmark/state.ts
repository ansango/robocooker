import { Bookmark } from "@/models/user/bookmark";

export interface BookmarkState {
  status: "idle" | "loading" | "failed";
  value: Bookmark | null;
}

export const initialState: BookmarkState = {
  status: "idle",
  value: null,
};
