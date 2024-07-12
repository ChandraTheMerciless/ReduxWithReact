import { configureStore } from '@reduxjs/toolkit';
import showCartReducer from './show-cart-slice';
import cartItemsReducer from './cart-slice';

const store = configureStore({
    reducer: {
        showCart: showCartReducer,
        cartItems: cartItemsReducer
    }
});

export default store;