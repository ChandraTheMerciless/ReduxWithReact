import { createSlice } from '@reduxjs/toolkit';

const showCartSlice = createSlice({
    name: 'showCart',
    initialState: { showCart: false },
    reducers: {
        toggleCart: (state) => {
            state.showCart = !state.showCart;
        }
    }
});

export default showCartSlice.reducer;
export const showCartActions = showCartSlice.actions;
