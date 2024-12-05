import Meal from "@/models/meal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SliceState = { ids: string[] };

// First approach: define the initial state using that type
// const initialState: SliceState = { ids: [] };

type AppPayloadAction = PayloadAction<{ id: string }>;

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { ids: [] } satisfies SliceState as SliceState,
  reducers: {
    addFavorite: (state, action: AppPayloadAction) => {
      state.ids.push(action?.payload?.id);
    },
    removeFavorite: (state, action: AppPayloadAction) => {
      state.ids.splice(state.ids.indexOf(action?.payload?.id), 1);
    },
  },
});

export default favoritesSlice.reducer;
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
