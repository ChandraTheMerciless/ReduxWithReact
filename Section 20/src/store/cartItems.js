import { createSlice } from '@reduxjs/toolkit';

import { showCartActions } from './showCart';

const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: { cartItems: [], totalQuantity: 0 },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;

            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.id === newItem.id
            );

            state.totalQuantity += 1;

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

export const sendCartData = (cartItems) => {
    return async (dispatch) => {
        dispatch(showCartActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-redux-dummy-440bc-default-rtdb.firebaseio.com/.json', {
                method: 'PUT',
                body: JSON.stringify(cartItems),
            })
    
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        };

        try {
            await sendRequest();

            dispatch(showCartActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Cart data sent successfully'
            }))
        } catch (error) {
            dispatch(showCartActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Failed to send cart data'
              }))
        }
    };
}

export default cartItemsSlice.reducer;
export const cartItemsActions = cartItemsSlice.actions;