import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import validator from 'validator';


import CheckoutItem from '../checkoutItem/checkoutItem';
import {readyOrder} from '../../actions';
import backIcon from '../../assets/img/cart-icon-back.svg';
import OrderServices from '../../services/order-service';

const orderService = new OrderServices();


class Checkout extends Component {
    state = {
        adres:'',
        phone:'',
        dopInfo:'',
        ready: false,
    }

    message = (text) => {
        if (text) {

            alert(text);
        
        }
    }

    onOrder = async () => {
        var today = new Date();
        const {order, totalPrice, totalQuantity } = this.props;
        
        const {adres, phone, dopInfo} = this.state;


        const formattedNumber = phone.toString().replace(/\D/g, '').replace(/^7/, '8');

        if(validator.isMobilePhone(phone.toString(), ['ru-RU'])){

        } else {
            this.message('Номер телефона введён не верно')
            return;
        }

        if(validator.isEmpty(adres.toString(), ['ru-RU'])){
            this.message('Адрес не введён')
            return;
        }
        
        const auth = JSON.parse(localStorage.getItem('userData'));
        const totalPricePlus = totalPrice + 99;
        await orderService.postOrder({
            orderItems: order,
            totalPrice: totalPricePlus,
            totalQuantity,
            userId: auth.userId,
            orderDate: today,
            orderAddress: adres,
            phone: formattedNumber,
            dopInfo: dopInfo,
            status: 'Обработка',
        })
            .then(async result  =>   {
                if(result.message === "Заказ оформлен"){
                  await  this.props.readyOrder(result.id)
                  await  this.setState({ready: true})
                }

            })

            
    }


    changeInput = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {order, totalPrice, totalQuantity} = this.props;

        return(
            <div className='checkout'>
                <div className='container'>
                    <div className='checkout__title'><i class="fas fa-shipping-fast"></i> Оформление заказа</div> 
                    <div className='checkout__block'>
                        <div className='checkout__info'>
                            <form>
                                <div className='checkout__inputs'>
                                    <input placeholder='Адрес доставки' required onChange={this.changeInput} type="text" name="adres"></input>
                                    <input placeholder='Номер телефона' required onChange={this.changeInput} type="tel" name="phone"></input>
                                    <textarea placeholder='Дополнительная информация (например: Номер парадной)' required name='dopInfo' onChange={this.changeInput} className='checkout__inputTextarea'></textarea>
                                </div>
                            </form>
                            <div className='checkout__buttons'>
                                <Link to={'/cart'} className='button button_checkoutBack'>
                                        <img width="6" height='12'  src={backIcon} alt="back icon" />
                                        <div>Вернуться назад</div>
                                </Link>
                                <div onClick={this.onOrder}     className='button button_checkoutPayment'>Заказать</div>
                                {this.state.ready ? <Redirect to={"/ready"} /> : null}
                            </div>
                        </div>
                        
                        <div className='checkout__order'>
                            <div className='checkout__orderTitle'>Ваш заказ</div>
                            <div className='checkout__items'>

                            {
                                order.map(orderItem => {
                                    return <CheckoutItem key={orderItem.id} orderItem = {orderItem}/>
                                })
                                
                            } 

                            </div>
                            
                            <div className='checkout__delInfo'>
                                <div className='checkout__del'>Доставка:</div>
                                <div className='checkout__delText'>
                                    <div></div>
                                    <div>{99} ₽</div>
                                </div>
                            </div>

                            <div className='checkout__totalInfo'>
                                <div className='checkout__totalName'>Всего:</div>
                                <div className='checkout__totalText'>
                                    <div>{totalQuantity} шт.</div>
                                    <div>{totalPrice + 99} ₽</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.orderItems,
        totalPrice: state.totalPrice,
		totalQuantity :state.totalQuantity,
    }
}

const mapDispatchToProps = {
    readyOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);