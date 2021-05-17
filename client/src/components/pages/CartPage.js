import React from 'react';
import Cart from '../cart/cart'
import Header from '../header/header.js';

const CartPage = () => {
    return (
        <>
            <Header authButton = {false} positon={'cart'}/>
            <Cart/>
        </>
    )
}

export default CartPage;