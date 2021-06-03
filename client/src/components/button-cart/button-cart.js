import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


// import headerCartIcon from './header-cart-icon.svg';

class ButtonCart extends Component {
	
	
    render() {
		const {cartButton, totalPrice, totalQuantity} = this.props;
		
		
		const clazz = cartButton ? 'button button_cart ' : 'hiden';
		return (
			<Link to ={'/cart'} className={clazz}>
				<span className="button__cart-text">{totalPrice} ₽</span>
				<div className="button__delimiter"></div>
				<div  className='button__cart-icon'   >
					<i class="fas fa-shopping-cart"></i>
				</div>
				<span className="button__cart-text" >{totalQuantity}</span>
				<span className="button__cart-mobail" >Корзина</span>
			</Link>
		);
	}
};

const mapStateToProps = (state) => {
    return {
        totalPrice: state.totalPrice,
		totalQuantity :state.totalQuantity,
		status: state.status,
    }
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCart);