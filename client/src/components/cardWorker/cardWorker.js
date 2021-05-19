import React, {Component} from 'react';
import CardWorkerItem from '../cardWorkerItem/cardWorkerItem';
import PizzaServis from '../../services/order-service';


const services = new PizzaServis();

class CardWorker extends Component {
    onClickChange = (id, status) => {
        services.changeStatus({
            id: id,
            status: status
        })
        .then(res => console.log(res))
    }

    

    render() {
        const {order} = this.props
        return(
            <div className='cardWorker'>
            <div className='cardWorker__title'>id: {order._id}</div>
            {
                order.orderItems.map(orderItem => {
                    return  <CardWorkerItem orderItem={orderItem}/>
                })
            }
           
            <div className='cardWorker__adres'>Адрес: {order.orderAddress}</div>
            <div className='cardWorker__dop'> Доплонительная информация: {order.dopInfo}</div>
            <div className='cardWorker__date'> Дата и верям заказа : {order.orderDate.toString()}</div>
            <div className='cardWorker__buttons'>
                <div className='button button_completed' onClick={()=>this.onClickChange(order._id, 'Приготовленно')}>Приготовленно</div>
                <div className='button button_delivered' onClick={()=>this.onClickChange(order._id, 'Доставленно')}>Доставленно</div>
            </div>
        </div>
        )
    }
}

export default CardWorker;