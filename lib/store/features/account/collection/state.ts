import { CollectionDTO } from "@/models/user/bookmark";

export interface CollectionState {
  status: "idle" | "loading" | "failed";
  value: CollectionDTO | null;
}

export const initialState: CollectionState = {
  status: "idle",
  value: null,
};
