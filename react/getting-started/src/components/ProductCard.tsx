import { useContext } from 'react';
import type { Product } from '../types';
import { CartContext } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button 
        className="button-primary" 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
