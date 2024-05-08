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
export default userSlice.reducer;
