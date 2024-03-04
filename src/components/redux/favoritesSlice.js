import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourites: [],
  },
  reducers: {
    addToFavourite(state, { payload }) {
      const isFavourite = state.favourites.some(
        (favProduct) => favProduct.id === payload.id
      );

      if (isFavourite) {
        state.favourites = state.favourites.filter(
          (favProduct) => favProduct.id !== payload.id
        );
      } else {
        state.favourites.push(payload);
      }
    },
  },
});

export default favouriteSlice.reducer;
export const { addToFavourite } = favouriteSlice.actions;
