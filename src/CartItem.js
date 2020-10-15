import React from 'react';
import './CartItem.css';

function CartItem({ id, name, price, qty, updateQty, handleRemove }){
     
    const addOne = () => updateQty(id, qty + 1);
    const subtractOne = () => updateQty(id, qty - 1);

    return(
        <div className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <div>
                <button onClick={subtractOne} disabled={qty <= 1}>-</button>
                {qty}
                <button onClick={addOne}>+</button>
            </div>
            <div>Total: ${qty * price}</div>
            <div onClick={() => handleRemove(id)} className="CartItem-remove">X</div>
        </div>
    )
}

export default CartItem;