import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total,product) => total+product.price, 0);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    let shipping = 0;

    if(total > 50){
        shipping = 0;
    } else if(total > 35)
    {
        shipping = 4.99;
    } else if(total > 0)
    {
        shipping = 12;
    }

    const vat = total / 10;

    const formatNumber = (num) => {
        const fixedPoint = num.toFixed(2);
        return Number(fixedPoint);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Ordered Item: {cart.length}</p>
            <p>Price: {formatNumber(total)}</p>
            <p>Shipping: {shipping}</p>
            <p><small>Vat: {formatNumber(vat)}</small></p>
            <h5>Total Price: <strong className='text-right'>{formatNumber(total+shipping+vat)}</strong> </h5>
        </div>
    );
};

export default Cart;