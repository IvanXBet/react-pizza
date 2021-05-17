import React, {Component} from 'react';

import {Link} from 'react-router-dom';


import img from '../../assets/img/vector.svg';

class CartNoOrder extends Component  {
    render() {
        return (
                <div className='cart-no-order'>
                    <div className='cart-no-order__title'>Корзина пустая 😕</div>
                    <div className='cart-no-order__descr'>Вероятней всего, вы не заказывали ещё пиццу.<br/> Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
                    <div className='cart-no-order__img'>
                        <img src={img}/>
                    </div>
                    <Link to ={'/'} className='button button_no-order'>Вернуться назад</Link>
                </div>
        )
    }
}


export default CartNoOrder;