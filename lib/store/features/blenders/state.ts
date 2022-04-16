import { Blender } from "@/models/blender";

export interface BlendersState {
  value: Blender[] | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: BlendersState = {
  value: null,
  status: "idle",
};
