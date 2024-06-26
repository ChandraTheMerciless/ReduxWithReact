import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
      increment: (state) => {
        state.counter += 1;
      },
      increase: (state, action) => {
        state.counter += action.payload; // Destructure payload from action
      },
      decrement: (state) => {
        state.counter -= 1;
      },
      toggleCounter: (state) => {
        state.showCounter = !state.showCounter;
      },
    },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;