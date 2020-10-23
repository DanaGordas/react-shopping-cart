import React from 'react';
import './CartItem.css';

function CartItem({ id, name, price, qty, img, updateQty, handleRemove }){
     
    const addOne = () => updateQty(id, qty + 1);
    const subtractOne = () => updateQty(id, qty - 1);

    return(
        <div className="CartItem">
            <img src={img} alt={name}/>
            <div className="CartItem-details">
                <div>{name}</div>
                <div>${price}</div>
                <div className="CartItem-qty">
                    <button onClick={subtractOne} disabled={qty <= 1}>-</button>
                    {qty}
                    <button onClick={addOne}>+</button>
                </div>
            </div>
            <div>Total: ${qty * price}</div>
            <div onClick={() => handleRemove(id)} className="CartItem-remove">X</div>
        </div>
    )
}

export default CartItem;