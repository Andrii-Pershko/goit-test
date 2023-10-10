import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6521a7fca4199548356d7441.mockapi.io/";
const params = new URLSearchParams();
params.append("limit", 8);
params.append("page", 1);

export const getCars = createAsyncThunk("carList", async (page, thunkAPI) => {
  try {
    params.set("page", 1);
    const response = await axios.get(`autoinfo?${params}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const getMoreCars = createAsyncThunk(
  "moreCarList",
  async (page, thunkAPI) => {
    try {
      if (page) {
        params.set("page", page);
      }
      const response = await axios.get(`autoinfo?${params}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
