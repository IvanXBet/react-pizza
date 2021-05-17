const initialState = {
    menu:[],
    loadingMenu: true,
    errorMenu: false,
    
    status:false,
    orderItems: [],

    totalQuantity: 0,
    totalPrice: 0,

    filter: 'all',
    readyOrder: false,
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: payload,
                loadingMenu: false,
                errorMenu: false,
            }

        case 'MENU_REQESTED':
            return {
                ...state,
                loadingMenu: true,
            }

        case 'MENU_ERROR':
            
            return {
                ...state,
                loadingMenu: false,
                errorMenu: true,
            }

        case 'ORDER_ADD':
            const newTotalPrice = state.totalPrice + payload.priceOfPizza;
            const newTotalQuantity = state.totalQuantity + payload.quantity;

           
            
            localStorage.setItem('dateOrder', JSON.stringify(
                [
                    ...state.orderItems,
                    payload
                ]
                ));
            
            localStorage.setItem('totalInfo', JSON.stringify(
                {
                    totalPrice: newTotalPrice,
                    totalQuantity: newTotalQuantity,
                }
            ))

            return {
                ...state,
                status: true,
                orderItems: [
                    ...state.orderItems,
                    payload,
                ],
                totalPrice: newTotalPrice,
                totalQuantity: newTotalQuantity,
            }

        case 'ORDER_CHANGE_QUANTITY':
            
            const {addUp, id, activeDough, activeDiameter} = payload;
            const item = state.orderItems.find(item => (item.id === id) && (item.activeDough === activeDough) && (item.activeDiameter === activeDiameter));
            let  newArry = [];
            let newTotalPrice2, newTotalQuantity2;

            if(addUp) {
                const quantity = item.quantity + 1;
                const priceOfItem = item.priceOfPizza * quantity;

                const newItem = {
                    ...item,
                    quantity,
                    priceOfItem
                };

                newArry = state.orderItems.map(item => {
                    if ((item.id === id) && (item.activeDough === activeDough) && (item.activeDiameter === activeDiameter)) {
                        return newItem;
                    }
                    return item;
                });

                newTotalPrice2 = state.totalPrice + item.priceOfPizza;
                newTotalQuantity2 = state.totalQuantity + 1;

            } else {
                const quantity = item.quantity - 1;
                if(quantity === 0) {
                    const itemIndex = state.orderItems.findIndex(item => (item.id === id) && (item.activeDough === activeDough) && (item.activeDiameter === activeDiameter));
                    const totalPriceDelItem = state.totalPrice - state.orderItems[itemIndex]['priceOfItem'];
                    const totalQuantityDelItem = state.totalQuantity - state.orderItems[itemIndex]['quantity'];
                    
                    return {
                        ...state,
                        orderItems: [
                            ...state.orderItems.slice(0, itemIndex),
                            ...state.orderItems.slice(itemIndex + 1)
                        ],
                        totalPrice: totalPriceDelItem,
                        totalQuantity: totalQuantityDelItem,
                    }
                }
                const priceOfItem = item.priceOfPizza * quantity;
                const newItem = {
                    ...item,
                    quantity,
                    priceOfItem
                };

                newArry = state.orderItems.map(item => {
                    if ((item.id === id) && (item.activeDough === activeDough) && (item.activeDiameter === activeDiameter)) {
                        return newItem;
                    }
                    return item;
                });

                newTotalPrice2 = state.totalPrice - item.priceOfPizza;
                newTotalQuantity2 = state.totalQuantity - 1;

            }
            localStorage.setItem('dateOrder', JSON.stringify(newArry));
            localStorage.setItem('totalInfo', JSON.stringify(
                {
                    TotalPrice: newTotalPrice2,
                    TotalQuantity: newTotalQuantity2,
                }
            ))
            return {
                ...state,
                orderItems: newArry,
                totalPrice: newTotalPrice2,
                totalQuantity: newTotalQuantity2,
            }
        

        case 'DEL_ORDER':
            const newItemOrder = [];
            localStorage.removeItem('dateOrder');
            localStorage.setItem('totalInfo', JSON.stringify({
                totalPrice: 0,
                totalQuantity: 0,
            }));
            return {
                ...state,
                status: false,
                orderItems: newItemOrder,
                totalQuantity: 0,
                totalPrice: 0,
            }

        case 'DEL_ITEM_ORDER':
            const {idDelItem, activeDoughDelItem, activeDiameterDelItem} = payload;
            const itemIndex = state.orderItems.findIndex(item => (item.id === idDelItem) && (item.activeDough === activeDoughDelItem) && (item.activeDiameter === activeDiameterDelItem));
            const totalPriceDelItem = state.totalPrice - state.orderItems[itemIndex]['priceOfItem'];
            const totalQuantityDelItem = state.totalQuantity - state.orderItems[itemIndex]['quantity'];

            const newArrDelItem = [
                ...state.orderItems.slice(0, itemIndex),
                ...state.orderItems.slice(itemIndex + 1)
            ]
            if(newArrDelItem.length < 1){
                localStorage.removeItem('dateOrder');
            } else {
                localStorage.setItem('dateOrder', JSON.stringify(newArrDelItem));
            }
            

            localStorage.setItem('totalInfo', JSON.stringify({
                totalPrice: totalPriceDelItem,
                totalQuantity: totalQuantityDelItem,
            }));

            return {
                ...state,
                orderItems: newArrDelItem,
                totalPrice: totalPriceDelItem,
                totalQuantity: totalQuantityDelItem,
            }

        case 'RELOAD_ORDER': 
            return {
                ...state,
                orderItems: payload.order,
                status: payload.status,
                totalQuantity: payload.totalInfo.totalQuantity,
                totalPrice: payload.totalInfo.totalPrice

            }

        case 'OFF_STATUS':
            return {
                ...state,
                status: false,
            }

        case 'SELECT_FILTER':
            
            return {
                ...state,
                filter: payload,
            }
        
        case 'READY_ORDER':
        console.log(payload)
        return {
            ...state,
            readyOrder: payload,
        }

        case 'CLOSE_READY_ORDER':
        
        return {
            ...state,
            readyOrder: false,
        }
        
                
        default: 
            return state;
    }
}

export default reducer;




