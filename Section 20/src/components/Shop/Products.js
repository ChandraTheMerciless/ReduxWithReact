import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    title: 'Test',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: '2',
    title: 'Test 2',
    price: 12,
    description: 'This is a second product - amazing!'
  },
  {
    id: '3',
    title: 'Test 3',
    price: 18,
    description: 'This is a third product - amazing!'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return <ProductItem key={product.id} {...product} />
        })}
      </ul>
    </section>
  );
};

export default Products;
