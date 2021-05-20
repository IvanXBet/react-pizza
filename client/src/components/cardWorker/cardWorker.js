import React, {Component} from 'react';
import CardWorkerItem from '../cardWorkerItem/cardWorkerItem';
import PizzaServis from '../../services/order-service';


const services = new PizzaServis();

class CardWorker extends Component {
    state = {
        order: {
            orderItems: [],
            orderDate: '',
        },
    }

    async componentDidMount() {
        await this.setState({order: this.props.order})
        console.log(this.state)
    }

    onClickChange = async (id, status) => {
        await this.setState(state => ({order: {...state.order, status: status}}))
        services.changeStatus({
            id: id,
            status: status
        })
        .then(res => console.log(res))
    }

    btnCompletedActiv = (order) => {
        if(order.status === 'Обработка'){
                return (
                    <>
                        <div className='button button_completed' onClick={()=>this.onClickChange(order._id, 'Приготовленно')}>Приготовленно</div>
                        <div className='button button_delivered' onClick={()=>this.onClickChange(order._id, 'Доставленно')}>Доставленно</div>
                    </>
                )
        } else if (order.status === 'Приготовленно') {
            return (
                <>
                    <div className='button button_completed button_completed_no' >Приготовленно</div>
                    <div className='button button_delivered' onClick={()=>this.onClickChange(order._id, 'Доставленно')}>Доставленно</div>
                </>
            )
        } else {
            return (
                <>
                    <div className='button button_completed button_completed_no' >Приготовленно</div>
                    <div className='button button_delivered button_completed_no' >Доставленно</div>
                </>
            )
        }
    }
    

    render() {
        const {order} = this.state
        const clazz = (order.status === 'Доставленно') ? 'cardWorker cardWorker_completed' : 'cardWorker';
        return(
            <div className={clazz}>
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
                {
                    this.btnCompletedActiv(order)
                }
            </div>
        </div>
        )
    }
}

export default CardWorker;