const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuREqested = () => {
    return {
        type: 'MENU_REQESTED'
    }
}
const menuError = () => {
    return {
        type : 'MENU_ERROR',
    }
}
const orderAdd = (newItemOrder) => {
    return {
        type : 'ORDER_ADD',
        payload: newItemOrder,
    }
}


const changeQuantity = (newQuantity) => {
    return {
        type : 'ORDER_CHANGE_QUANTITY',
        payload: newQuantity,
    }
}

const delOrder = () => {
    return {
        type : 'DEL_ORDER'
    }
}

const delItemOrder = (id) => {
    return {
        type : 'DEL_ITEM_ORDER',
        payload: id,
    }
}
const offSatus = () => {
    return {
        type : 'OFF_STATUS'
    }
}

const onFilterSelect = (name) => {
    return {
        type : 'SELECT_FILTER',
        payload: name,
    }
}

const reloadOrder = (order) => {
    return {
        type: 'RELOAD_ORDER',
        payload: order,
    }
}

const readyOrder = (idOrder) => {
    return {
        type: 'READY_ORDER',
        payload: idOrder,
    }
}
const closeReadyOrder = () => {
    return {
        type: 'CLOSE_READY_ORDER',
    }
}


export {
    menuLoaded,
    menuREqested,
    menuError,
    orderAdd,
    delOrder,
    delItemOrder,
    offSatus,
    onFilterSelect,
    changeQuantity,
    reloadOrder,
    readyOrder,
    closeReadyOrder
};