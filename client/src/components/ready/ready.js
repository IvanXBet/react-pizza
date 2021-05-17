import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeReadyOrder, delOrder} from '../../actions';
import {Redirect, Link} from 'react-router-dom';


class Ready extends Component {
    async componentWillUnmount() {
        await this.props.closeReadyOrder();
        await this.props.delOrder();
        await localStorage.removeItem('dateOrder');
    }
    render() {
        const {orderId} = this.props
        return(
            <>
                {orderId ? null : <Redirect to={"/"} />}
                <div className='ready'>
                    <div className='ready__title'>Ваш заказ уже готовиться и скоро приедет 🛵</div>
                    <div className='ready__text'>ID вашего заказа: {orderId}</div>
                    <Link to={'/'} className='button button_ready'>Перейти в главное меню</Link>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orderId: state.readyOrder,
    }
}

const mapDispatchToProps = {
    closeReadyOrder,
    delOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ready);