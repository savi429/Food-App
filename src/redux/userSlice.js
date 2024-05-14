import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    darkMode: false,
  },
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = userSlice.actions;
export const fetchAPIData = (props) => {
  return async (dispatch, getState) => {
    try {
      console.log("state", getState(), props);
      // let response = await fetch("https://api");
      // let data = await response.json();
      // // dispatch(setDarkMode());
    } catch {
      console.log(err);
    }
  };
};
export default userSlice.reducer;
