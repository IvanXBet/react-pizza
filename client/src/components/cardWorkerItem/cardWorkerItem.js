import React, {Component} from 'react';

class CardWorkerItem extends Component {
    render() {
        return(
            <div className='cardWorkerItem'>
                <div className='cardWorkerItem__name'>{'Чизбургер-пицца'}</div>
                <div className='cardWorkerItem__dough'>Тесто: {'тонкое'}</div>
                <div className='cardWorkerItem__diameter'>{'26 см'}</div>
            </div>
        )
    }
}

export default CardWorkerItem;