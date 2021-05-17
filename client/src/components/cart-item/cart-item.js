import React, {Component} from 'react';
import Button from '../button/button';



import daleteIcon from '../../assets/img/cart-icon-delete.svg';

class CartItem extends Component  {
    delItemOrder = () => {
        const {id, activeDough, activeDiameter} = this.props.orderItem;
        const idDelItem = id,
        activeDoughDelItem = activeDough,
        activeDiameterDelItem = activeDiameter;

        this.props.delItemOrder({
            idDelItem,
            activeDoughDelItem,
            activeDiameterDelItem,
        });
    }
    pluseItemQuantity = () => {
        const {id, activeDough, activeDiameter} = this.props.orderItem;
        const addUp = true;
        this.props.changeItemQuantity({
            addUp,
            id,
            activeDough,
            activeDiameter
        });
    }
    minusItemQuantity = () => {
        const {id, activeDough, activeDiameter} = this.props.orderItem;
        const addUp = false;
        this.props.changeItemQuantity({
            addUp,
            id,
            activeDough,
            activeDiameter
        });
    }


    render() {
        const {title, url, activeDough, activeDiameter, quantity, priceOfItem} = this.props.orderItem;
        
        return (
        <div className='cartItem'>
            <div className='cartItem__first'>
                <img className='cartItem__img' src={url} alt="icon pizza"/>
                <div className='cartItem__text'>
                    <h2 className='cartItem__name'>{title}</h2>
                    <div className='cartItem__descr'>{activeDough} тесто, {activeDiameter} см.</div>
                </div>
            </div>
            <div className='cartItem__second'>
                <div className='cartItem__quantity'>
                    <div className='cartItem__changeQuantity' onClick={this.minusItemQuantity}> - </div>
                    
                    <div className='cartItem__quantityText'>{quantity}</div>
                    
                    <div className='cartItem__changeQuantity' onClick={this.pluseItemQuantity}> + </div>
                </div>
                <div className='cartItem__price'>{priceOfItem} ₽</div>
                <Button onClick={this.delItemOrder} className='button button_cartDelete'> 
                    <img src={daleteIcon} alt='delete item'/>
                </Button>
            </div>
        </div>
        )
    }
}



export default CartItem;