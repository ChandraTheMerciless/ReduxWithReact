import { configureStore } from '@reduxjs/toolkit';
import showCartReducer from './showCart';
import cartItemsReducer from './cartItems';

const store = configureStore({
    reducer: {
        showCart: showCartReducer,
        cartItems: cartItemsReducer
    }
});

export default store;