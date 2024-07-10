import { useEffect } from'react';

import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showCart = useSelector((state) => state.showCart.showCart);
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  useEffect(() => {
    fetch('https://react-redux-dummy-440bc-default-rtdb.firebaseio.com/.json', {
      method: 'PUT',
      body: JSON.stringify(cartItems),
    })
  }, [cartItems])

  return (    
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
);
}

export default App;
