import React, {Component} from 'react';

class CardWorkerItem extends Component {
    render() {
        const {orderItem} = this.props
        return(
            <div className='cardWorkerItem'>
                
                <div className='cardWorkerItem__name'>{orderItem.title}</div>
                <div className='cardWorkerItem__dough'>Тесто: {orderItem.activeDough}</div>
                <div className='cardWorkerItem__diameter'>Диаметр: {orderItem.activeDiameter}</div>
                <div className='cardWorkerItem__diameter'>Количество: {orderItem.quantity}</div>
            </div>
        )
    }
}

export default CardWorkerItem;