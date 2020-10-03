import {ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, 
        SUB_QUANTITY, ADD_ADDITIONAL, REMOVE_ADDITIONAL, SEND_DATA} from '../actions/actionTypes'

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id: id
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id: id
    }
}

export function addQuantity(id) {
    return {
        type: ADD_QUANTITY,
        id: id
    }
}

export function subQuantity(id) {
    return {
        type: SUB_QUANTITY,
        id: id
    }
}

export function addAdditional(id) {
    return {
        type: ADD_ADDITIONAL,
        id: id
    }
}

export function removeAdditional(id) {
    return {
        type: REMOVE_ADDITIONAL,
        id: id
    }
}

export function sendData() {
    return {
        type: SEND_DATA
    }
}