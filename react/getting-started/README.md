# Getting Started with React: E-commerce Demo

This project demonstrates fundamental React concepts using a simple e-commerce application. It was created using Vite with TypeScript to showcase modern React development practices.

## Core React Concepts Demonstrated

### Components
The application is built using several reusable components:

- **ProductCard**: Displays individual product information
- **ProductList**: Renders a collection of ProductCard components
- **Cart**: Shows the current shopping cart with added items

Components allow us to split the UI into independent, reusable pieces that can be developed and maintained separately.

### Props
Props are used to pass data from parent to child components:

- The `ProductList` component receives a `products` array as props and passes individual `product` objects to each `ProductCard`.
- Each `ProductCard` receives a `product` prop containing the data to display.

Props demonstrate the one-way flow of data in React applications and enable component reusability.

### State
State is used to manage data that changes over time:

- The cart state is managed using React's `useState` hook within the `CartProvider` component.
- This state tracks which products have been added to the cart and their quantities.

### Unidirectional Data Flow
The application follows React's unidirectional data binding pattern:

1. Data flows down from parent to child components through props
2. Events trigger state changes (e.g., clicking "Add to Cart")
3. When state changes, components re-render with the new data

This pattern makes applications more predictable and easier to debug.

### Context API
React's Context API is used to manage global state:

- The `CartContext` provides cart-related data and functions to all components
- Components can access and modify cart state without prop drilling

## Project Structure

```
src/
├── components/       # UI components
│   ├── Cart.tsx
│   ├── ProductCard.tsx
│   └── ProductList.tsx
├── contexts/         # React contexts
│   └── CartContext.tsx
├── data/             # Static data
│   └── products.ts
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main application component
├── App.css           # Global styles
└── main.tsx          # Application entry point
```

## Running the Project

1. Install dependencies with `npm install` or `pnpm install`
2. Start the development server with `npm run dev` or `pnpm run dev`
3. Open your browser to the URL displayed in the terminal

## Key Code Examples

### Component with Props (ProductCard.tsx)
```tsx
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};
```

### Context for State Management (CartContext.tsx)
```tsx
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Other functions...

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
```

## Next Steps

This project serves as a foundation for learning more advanced React concepts. Consider exploring:

- React Router for multi-page applications
- More advanced state management with Redux or Zustand
- Server communication with React Query or SWR
- Testing React components with Jest and React Testing Library
