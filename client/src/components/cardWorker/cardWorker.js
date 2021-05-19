import React, {Component} from 'react';
import CardWorkerItem from '../cardWorkerItem/cardWorkerItem';

class CardWorker extends Component {
    render() {
        return(
            <div className='cardWorker'>
            <div className='cardWorker__title'>id: {'1001010101010101'}</div>
            <CardWorkerItem/>
            <div className='cardWorker__adres'>Адрес: {'Чудновкгого 8 корпу 4 '}</div>
            <div className='cardWorker__dop'> Доплонительная информация: {'первая паралная '}</div>
            <div className='cardWorker__buttons'>
                <div className='button'>Приготовленно</div>
                <div className='button'>Доставленно</div>
            </div>
        </div>
        )
    }
}

export default CardWorker;