import { createSlice } from '@reduxjs/toolkit';

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: { cartItems: [], totalQuantity: 0, changed: false },
    reducers: {
        replaceCart(state, action) {
            console.log('replaceCart', action.payload);
            state.totalQuantity = action.payload.totalQuantity;
            state.cartItems = action.payload.cartItems;
        },
        addItem: (state, action) => {
            const newItem = action.payload;

            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.id === newItem.id
            );

            state.totalQuantity += 1;
            state.changed = true;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    title: newItem.title,
                    quantity: 1
                });
            } else {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price  + newItem.totalPrice;
            }
        },
        removeItem: (state, action) => {
            state.totalQuantity -= 1;
            state.changed = true;
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.id === action.payload
            );

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id!== action.payload
                );
            } else {
                existingItem.quantity -= 1;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export default cartItemsSlice.reducer;
export const cartItemsActions = cartItemsSlice.actions;