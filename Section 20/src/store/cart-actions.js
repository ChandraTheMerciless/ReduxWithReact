import { showCartActions } from './show-cart-slice';

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