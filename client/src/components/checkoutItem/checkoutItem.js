const checkoutItem = ({orderItem}) => {
    return (
        <div className='checkoutItem'>
            <div className='checkoutItem__first'>
                <div className='checkoutItem__text'>
                    <h2 className='checkoutItem__name'>{orderItem.title}</h2>
                    <div className='checkoutItem__descr'>{orderItem.activeDough} тесто, {orderItem.activeDiameter} см.</div>
                </div>
            </div>
            <div className='checkoutItem__second'>
                <div className='checkoutItem__quantity'>{orderItem.quantity} шт.</div>
                <div className='checkoutItem__quantity'> {orderItem.priceOfItem} ₽</div>
            </div>
        </div>
    )
}

export default checkoutItem;