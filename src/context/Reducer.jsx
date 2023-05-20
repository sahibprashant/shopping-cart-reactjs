export function CartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            return { ...state, cart: (state.cart.filter((prod) => prod.id != action.payload.id)) }
        case "UPDATE_CART":
            return {
                ...state, cart: (state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                }))
            }
        default:
            return state;
    }
}


export function FilterReducer(state, action) {
    switch (action.type) {
        case "FILTER_SORT":
            return { ...state, sort: action.payload };
        case "FILTER_DELIVERY":
            return {...state, fastDelivery: !state.fastDelivery};
        case "FILTER_INCLUDE_OUT_OF_STOCK":
            return {...state, outOfStock: !state.outOfStock};
        case "FILTER_RATING":
            return {...state, rating: action.payload};
        case "FILTER_SEARCH":
            return {...state, searchQuery: action.payload};
        case "FILTER_CLEAR_FILTER":
            return {
                sort: '',
                fastDelivery: false,
                outOfStock: false,
                rating: 0,
                searchQuery: '',
                clearFilter: false,
            };
        default:
            return state;
    }
}

