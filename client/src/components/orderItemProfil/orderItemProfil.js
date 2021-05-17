

const OrderItemProfil = ({orderItem}) => {
    
    return (
        <div className='orderItemProfil'>
            <div className='orderItemProfil__first'>
                <div className='orderItemProfil__text'>
                    <h2 className='orderItemProfil__name'>Заказ с ID: <span>{orderItem._id}</span></h2>
                    <div className='orderItemProfil__descr'>{orderItem.orderDate}</div>
                </div>
            </div>

            <div className='orderItemProfil__second'>
                <div className='orderItemProfil__quantity'>{orderItem.totalQuantity} шт.</div>
                <div className='orderItemProfil__quantity'>{orderItem.totalPrice} ₽</div>
                <div className='orderItemProfil__quantity orderItemProfil__status_3'>{orderItem.status}</div>
            </div>
        </div>
    )
}

export default OrderItemProfil;