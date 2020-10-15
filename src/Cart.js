import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({ initialItems }){

    const initialState = JSON.parse(window.localStorage.getItem('items'));
    const [ items, setItems] = useState(initialState || initialItems);

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    
    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if(item.id === id){
                return {...item, qty: newQty};
            }
            return item;
        })
        setItems(newItems);
    }

    const handleRemove = (id) => {
        const newCart = items.filter((item) => item.id !== id);
        setItems(newCart);
    }

    const grandTotal = items.reduce((total, item) => (
        total + (item.qty * item.price)
    ), 0).toFixed(2);
    
    return(
        <div className="Cart">
            <h4 className="Cart-title">My Cart</h4>
            <div className="Cart-items">
                {items.map(item => (
                    <CartItem key={item.id} {...item} updateQty={updateQty} handleRemove={handleRemove}/>
                ))}
            </div>
            <h4 className="Cart-total">Total: ${grandTotal} </h4>
        </div>
    )  
}

export default Cart;