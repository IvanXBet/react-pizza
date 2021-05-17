import React, {useState, useEffect} from 'react';

const Guide = ({positon}) => {
    useEffect(() => {
        if(positon === 'cart') {
            const claszz = 'guide__circle';
        }
        if(positon='checkout') {
            const claszz = 'guide__circle guide__circleDone'
        }
    }, [])

    return (
        <div className='guide'>
            <div className='guide__item'>
                <div className='guide__circle'>1</div>
                <div className='guide__text'>корзина</div>
            </div>

            <div className='guide__line'></div>

            <div className='guide__item'>
                <div className='guide__circle'>2</div>
                <div className='guide__text'>оформление</div>
            </div>

            <div className='guide__line'></div>

            <div className='guide__item'>
                <div className='guide__circle'>3</div>
                <div className='guide__text'>готово</div>
            </div>
        </div>
    )
}

export default Guide; 