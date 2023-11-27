import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { articles: [], favorites: [] },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.value.articles = action.payload;
      console.log("MAIN", state.value.articles);
    },
    setFavorites: (state, action) => {
      state.value.favorites.push(action.payload);
      console.log("added new fav", action.payload);
      console.log(state.value.favorites);
    },
  },
});

export const { setArticles, setFavorites } = newsSlice.actions;
export default newsSlice.reducer;
