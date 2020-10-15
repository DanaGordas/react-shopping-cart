import React from 'react';
import './App.css';
import Cart from './Cart';

const items = [
  {id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2},
  {id: 2, name: 'Black beans', price: 1.99, qty: 1},
  {id: 3, name: 'Avocado', price: 3.00, qty: 3},
]

function App() {
  return (
    <div>
      <Cart initialItems={items}/>
    </div>
  );
}

export default App;
