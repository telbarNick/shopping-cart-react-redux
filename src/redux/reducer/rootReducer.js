import currency from 'currency.js'
import productsData from '../../React ТЗ JSON.json'
import {ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, 
        SUB_QUANTITY, ADD_ADDITIONAL, REMOVE_ADDITIONAL, SEND_DATA} from '../actions/actionTypes'

// Adding to JSON file new keys 
productsData.forEach(item => {
    item.quantity = 1
})

const initialState = {
    products: productsData,
    selectedItems: [],
    additional: [],
    totalPrice: '0.00'
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: 
        let selectedItem = state.products.find(item => item._id === action.id); 

        // Using currency.js library, doing some math with item
        let multiplyByQuantity = currency(currency(selectedItem.price).value)
                                        .multiply(selectedItem.quantity).value; 
        let addToTotalPrice = currency(currency(state.totalPrice).value)
                                        .add(multiplyByQuantity)
                                            .value.toFixed(2);
            return {
                ...state,
                totalPrice: addToTotalPrice,
                selectedItems: [...state.selectedItems, selectedItem]
            }
            
        case REMOVE_FROM_CART:
            let itemToRemove = state.products.find(item => item._id === action.id); 
            let selectedItemsFilter = state.selectedItems.filter(item => action.id !== item._id);

            let multiplyToRemove = currency(currency(itemToRemove.price).value)
                                          .multiply(itemToRemove.quantity).value;
            let reducedTotalPrice = currency(currency(state.totalPrice).value)
                                          .subtract(multiplyToRemove).value.toFixed(2);

            // Remove all addiional items and set new total price
            if (state.additional.length) {
                let removeSelectedAdditional = state.additional;    
                let newAdditional = removeSelectedAdditional.filter(item => !itemToRemove.additional.includes(item));
                let priceToRemove = removeSelectedAdditional.filter(item => itemToRemove.additional.includes(item));
                priceToRemove.forEach(item => {
                    reducedTotalPrice = currency(currency(reducedTotalPrice).value)
                                                .subtract(currency(item.price).value)
                                                    .value.toFixed(2)})
                    return {
                    ...state,
                    selectedItems: selectedItemsFilter,
                    totalPrice: reducedTotalPrice,
                    additional: newAdditional
                }
            } else return {
                ...state,
                selectedItems: selectedItemsFilter,
                totalPrice: reducedTotalPrice
            }    

           
        case ADD_QUANTITY:
            let addQuantityFindIndex = state.selectedItems.findIndex(item => item._id === action.id)
            let findedItem = state.selectedItems[addQuantityFindIndex]

                if (findedItem) {
                    findedItem.quantity += 1
                let addItemPrice = currency(currency(state.totalPrice).value)
                                        .add(currency(findedItem.price).value)
                                            .value.toFixed(2);
                    return {
                        ...state,
                        totalPrice: addItemPrice
                    }
                } else {
                let quantityUp = state.products.find(item => item._id === action.id);
                    quantityUp.quantity += 1
                    return {
                        ...state
                    }
                    
                }
                
        case SUB_QUANTITY:
            let subQuantityFindIndex = state.selectedItems.findIndex(item => item._id === action.id);
            let subFindedItem = state.selectedItems[subQuantityFindIndex];

                if (subFindedItem && subFindedItem.quantity > 1) {
                    subFindedItem.quantity -= 1
                let subItemPrice = currency(currency(state.totalPrice).value)
                                            .subtract(currency(subFindedItem.price).value)
                                                .value.toFixed(2);
                    return {
                        ...state,
                        totalPrice: subItemPrice
                    }
                } else {
                let quantityDown = state.products.find(item => item._id === action.id);
                    if (quantityDown.quantity > 1) {
                        quantityDown.quantity -= 1
                    }
                    return {
                        ...state
                    }
                }
                
        case ADD_ADDITIONAL:
            let findAdditional = state.selectedItems.find(item => item._id === action.id.item);
            let additionalItemAdd = findAdditional.additional.find(item => item._id === action.id.additional);
            let additionalItemTotalPrice = currency(currency(state.totalPrice).value)
                                                .add(currency(additionalItemAdd.price).value)
                                                    .value.toFixed(2);
            return {
                ...state,
                totalPrice: additionalItemTotalPrice,
                additional: [...state.additional, additionalItemAdd]
            }

        case REMOVE_ADDITIONAL:
            let findAdditionalToRemove = state.selectedItems.find(item => item._id === action.id.item);
            let additionalItemRemove = findAdditionalToRemove.additional.find(item => item._id === action.id.additional);
            let newAdditionalItemTotalPrice = currency(currency(state.totalPrice).value)
                                                    .subtract(currency(additionalItemRemove.price).value)
                                                            .value.toFixed(2);
            let newAdditionalItems = state.additional.filter(item => action.id.additional !== item._id);

            return {
                ...state,
                totalPrice: newAdditionalItemTotalPrice,
                additional: newAdditionalItems
            }

        case SEND_DATA:
            return initialState

        default: 
            return state 
    }
}