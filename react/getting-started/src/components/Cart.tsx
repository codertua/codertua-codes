import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.product.id} className="cart-item">
              <div>
                <p>{item.product.name} x {item.quantity}</p>
                <p>${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
              <button 
                className="button-remove"
                onClick={() => removeFromCart(item.product.id)}
              >
                Remove
              </button>
            </div>
          ))}
          
          <div style={{ marginTop: '1rem', borderTop: '1px solid #444', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <strong>Total:</strong>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={clearCart}>Clear Cart</button>
              <button className="button-primary">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
