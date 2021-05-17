import React from 'react';
import Checkout from '../checkout/checkout'
import Header from '../header/header.js';

const CheckoutPage = () => {
    return (
        <>
            <Header authButton = {false}/>
            <Checkout/>
        </>
    )
}

export default CheckoutPage;