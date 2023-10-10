import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getCars, getMoreCars } from "./operation";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.cars = action.payload;
  state.pagination = action.payload.length / 8 === 1;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isLoadingBtn = false;
  state.error = action.payload;
};

const handlePendingMore = (state) => {
  state.isLoadingBtn = true;
};

const handleFulfilledMore = (state, action) => {
  state.isLoadingBtn = false;
  state.cars = [...state.cars, ...action.payload];
  state.pagination = action.payload.length / 8 === 1;
};

const carsSlice = createSlice({
  name: "carList",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCars.pending, handlePending)
      .addCase(getCars.fulfilled, handleFulfilled)
      .addCase(getCars.rejected, handleRejected)
      .addCase(getMoreCars.pending, handlePendingMore)
      .addCase(getMoreCars.fulfilled, handleFulfilledMore)
      .addCase(getMoreCars.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
