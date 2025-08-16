import { CartProvider } from './contexts/CartContext';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { products } from './data/products';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <header className="header">
          <h1>React E-commerce Demo</h1>
        </header>
        
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '2rem' }}>
          <main>
            <h2>Products</h2>
            <ProductList products={products} />
          </main>
          
          <aside>
            <Cart />
          </aside>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
