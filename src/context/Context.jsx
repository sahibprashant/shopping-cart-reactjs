import React, { createContext, useReducer, useContext } from 'react'
import { faker } from '@faker-js/faker';
import { CartReducer, FilterReducer } from './Reducer';


const CartContext = createContext();

export function cartContext() {
    return useContext(CartContext);
}

const Context = ({ children }) => {
    faker.seed(200);
    const data = [...Array(20)].map((item) => {
        return {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            img: faker.image.urlPicsumPhotos(),
            inStock: faker.helpers.arrayElement([0, 2, 5, 9]),
            fastDelivery: faker.datatype.boolean(),
            rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        }
    })

    const [state, dispatch] = useReducer(CartReducer, {
        products: data,
        cart: []
    });

    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        sort: '',
        fastDelivery: false,
        outOfStock: false,
        rating: 0,
        searchQuery : '',
        clearFilter : false,
    });

    return (
        <CartContext.Provider value={{ state, dispatch, filterState, filterDispatch}}>{children}</CartContext.Provider>
    )
}

export default Context;
