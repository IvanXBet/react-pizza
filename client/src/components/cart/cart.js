import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartNoOrder from '../cart-no-order/cart-no-norder';
import CartBlock from '../cart-block/cart-block'
import {offSatus} from '../../actions';

class Cart extends Component  {
    componentDidMount() {
        
        
    }
    componentDidUpdate() {
        if(this.props.totalQuantity < 1) {
            this.props.offSatus();
        }
    }

    render() {
        const {status} = this.props;
        const content = status ? <CartBlock/> : <CartNoOrder/>;
        return (
            <div className='cart'>
                <div className='container'>
                    {content}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       status: state.status,
       order : state.orderItems,
       totalPrice : state.totalPrice,
       totalQuantity: state.totalQuantity,
    }
} 
const mapDispatchToProps = {
    offSatus,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);