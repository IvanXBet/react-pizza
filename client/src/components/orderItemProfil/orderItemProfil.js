

const dateBday = (orderItem) => {
    const date = new Date(orderItem.orderDate);
    let y = date.getFullYear();
    let m, d, h, min;
    if(date.getMonth() <10){
        m = '0' + (date.getMonth() + 1)
    } else {m = date.getMonth() + 1}
    
    if(date.getDate() < 10){
        d = '0' + (date.getDate() + 1)
    } else {d = date.getDate() + 1}

    if(date.getHours() < 10){
        h = '0' + (date.getHours() + 1)
    } else {h = date.getHours() + 1}

    if(date.getMinutes() < 10){
        min = '0' + (date.getMinutes() + 1)
    } else {min = date.getMinutes() + 1}

    const str = `${d}-${m}-${y} ${h}:${min}`;

    return str;
}

const btnDelit = (status, id, delitOrder) => {
    if(status === 'Обработка'){
        return <div onClick={()=>delitOrder(id)} className='orderItemProfil__delit'>Отменить</div>
    } 
}

const OrderItemProfil = ({orderItem, delitOrder}) => {
    
    return (
        <div className='orderItemProfil'>
            {btnDelit(orderItem.status, orderItem._id, delitOrder)}
            <div className='orderItemProfil__first'>
                <div className='orderItemProfil__text'>
                    <h2 className='orderItemProfil__name'>Заказ с ID: <span>{orderItem._id}</span></h2>
                    <div className='orderItemProfil__descr'>{dateBday(orderItem)}</div>
                </div>
            </div>

            <div className='orderItemProfil__second'>
                <div className='orderItemProfil__quantity'>{orderItem.totalQuantity} шт.</div>
                <div className='orderItemProfil__quantity'>{orderItem.totalPrice} ₽</div>
                <div className='orderItemProfil__quantity '>{orderItem.status}</div>
            </div>
        </div>
    )
}

export default OrderItemProfil;