import { showCartActions } from './show-cart-slice';
import { cartItemsActions } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            // GET request is the default, so I don't need to add a config object in the fetch()
            const response = await fetch('https://react-redux-dummy-440bc-default-rtdb.firebaseio.com/.json', {
                method: 'GET'
            });

            if (!response.ok) {
                throw new Error('Fetching cart data failed');
            }

            const data = await response.json();
            return data;
        }

        try {            
            const cartData = await fetchData();
            dispatch(cartItemsActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity || 0
            }));
        } catch (error) {
            dispatch(showCartActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Failed to fetch cart data'
            }))
        }
    }
};

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
            console.log({error});
            dispatch(showCartActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Failed to send cart data'
            }))
        }
    };
}