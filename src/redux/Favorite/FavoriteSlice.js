import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCars: [],
};

const favoriteSlice = createSlice({
  name: "cars/favorite",
  initialState,
  reducers: {
    updateFavorite: (state, action) => {
      state.favoriteCars = action.payload;
    },
  },
});

export const { updateFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
