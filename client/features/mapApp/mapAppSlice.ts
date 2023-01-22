import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const key = process.env.key;

export const getPlaceAsync = createAsyncThunk(
  "places",
  async (search: string) => {
    const sluggedSearch = search.split(" ").join("_");
    try {
      const { data } = await axios.get(`/api/places/${sluggedSearch}`);
      return data.candidates[0];
    } catch (err) {
      console.error(err);
    }
  }
);

const placesSlice = createSlice({
  name: "places",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlaceAsync.fulfilled, (state: any[], action) => {
      state.push(action.payload);
    });
  },
});

export const currentPlaces = (state) => {
  return state.places;
};

export default placesSlice.reducer;
