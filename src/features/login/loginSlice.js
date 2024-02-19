import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from "./loginAPI";

const initialState = {
  username: "",
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    setUsername: (state, action) => {
        state.username = action.payload;
    },
    setLoggedIn: (state, action) => {
        state.isLoggedIn = action.payload;
    }
  },
  extraReducers: (builder) => {},
});

export const { setUsername,setLoggedIn } = loginSlice.actions;

export const selectLogin = (state) => state.login.value;

export default loginSlice.reducer;
