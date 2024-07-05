import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              total: item.quantity * item.price,
              quantity: item.quantity,
              price: item.price
            }} />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
