import { createSlice, configureStore } from '@reduxjs/toolkit';

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

console.log(counterSlice.actions);

const store = configureStore({ 
  reducer: { 
    counter: counterSlice.reducer 
  } 
});

export const counterActions = counterSlice.actions;

export default store;

// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { counter: 0, showCounter: true },
//   reducers: {
//     increment: (state) => {
//       state.counter += 1;
//     },
//     increase: (state, action) => {
//       state.counter += action.payload;
//     },
//     decrement: (state) => {
//       state.counter -= 1;
//     },
//     toggleCounter: (state) => {
//       state.showCounter = !state.showCounter;
//     }
//   }
// });

// const store = configureStore({ reducer: { counter: counterSlice.reducer } });

// export const counterActions = counterSlice.actions;

// export default store;