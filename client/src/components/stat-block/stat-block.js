import React, {Component} from 'react';
import PizzaServis from '../../services/order-service';

const services = new PizzaServis();

class Statblock extends Component {
    state = {
        totalQuantity: null,
        totalPrice: null,
    }

    async componentDidMount() {
        let quantity = null;
        let price = null;
        await services.getAllOrders()
            .then(res => {
                res.map(item => {
                    quantity = quantity + item.totalQuantity
                    price = price + item.totalPrice
                })
                
                this.setState({
                    totalQuantity: quantity,
                    totalPrice: price,
                })
            }) 
        console.log(this.state)
            
    }
   

    render() {
        const {totalQuantity, totalPrice} = this.state 
        return(
            <>
                <div className='stat'>
                    <div className='container'>
                        <div className='stat__block'>
                            <div className='stat__title'>Статистика</div>
                            <div className='stat__first'>
                                <div className='stat__firstBlock'>
                                    <div className='stat__firstBlockTitl'>Всего пицц продано:</div>
                                    <div className='stat__firstBlockInfo'>{totalQuantity} шт.</div>
                                </div>
                                <div className='stat__firstBlock'>
                                    <div className='stat__firstBlockTitl'>Выручка:</div>
                                    <div className='stat__firstBlockInfo'>{totalPrice} ₽</div>
                                </div>
                            </div>
                            <div className='stat__second'></div>
                            <div className='stat__schedule'></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Statblock;