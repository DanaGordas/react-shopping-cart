import React from 'react';
import './App.css';
import Cart from './Cart';

const items = [
  {id: 1, name: 'Pescatarian Box', price: 125, qty: 2, img: "/pescatarian_box.jpg"},
  {id: 2, name: 'Produce Box', price: 105, qty: 1, img: "/produce_box.jpg"},
]

function App() {
  return (
    <div>
      <Cart initialItems={items}/>
    </div>
  );
}

export default App;
