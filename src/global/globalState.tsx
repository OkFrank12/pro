import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  toggle: false,
  newToggle: false,
};

const GlobalState = createSlice({
  name: "user",
  initialState,
  reducers: {
    onUserState: (state, { payload }) => {
      state.user = payload;
    },
    onLogOut: (state) => {
      state.user = null;
    },
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onNewToggleState: (state, { payload }) => {
      state.newToggle = payload;
    },
  },
});

export const { onUserState, onLogOut, onToggleState, onNewToggleState } = GlobalState.actions;

export default GlobalState.reducer;
