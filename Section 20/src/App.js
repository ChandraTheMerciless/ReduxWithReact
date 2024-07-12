import { useEffect } from'react';

import { useSelector, useDispatch } from 'react-redux';

import Notification from './components/UI/Notification';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData } from './store/cart-actions';

let isInitial = true

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.showCart.showCart);
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const notification = useSelector((state) => state.showCart.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch])
  console.log({notification})

  return (
    <>
      <Layout>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} /> }
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
);
}

export default App;
