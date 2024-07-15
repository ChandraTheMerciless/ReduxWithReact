import { createSlice } from '@reduxjs/toolkit';

const showCartSlice = createSlice({
    name: 'showCart',
    initialState: { showCart: false, notification: null },
    reducers: {
        toggleCart: (state) => {
            state.showCart = !state.showCart;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export default showCartSlice.reducer;
export const showCartActions = showCartSlice.actions;
