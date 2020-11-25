import React, { useState, useReducer, createContext } from 'react'
import CheckoutInstance from './Checkout'

const ShoppingCartContext = createContext([{}, () => {}])
const initialState = {
    showModal: false,
    image: '',
    imageLarge: '',
    name: '',
    code: '',
    description: '',
    stringCode: '',
    discount: '',
    quantity: 0,
}

const calcDiscount = (type, action, state, from) => {
    let { quantity } = action
    const { discount } = action
    quantity = from === 'button' ? quantity + 2 : quantity
    const price = state.price || action.price
    const {
        data: { discounts },
    } = CheckoutInstance
    if (type === 'increase') {
        discounts.forEach((discountOrigin) => {
            if (discount === discountOrigin.name) {
                if (discountOrigin.name === '2-for-1' && quantity % 2 === 0) {
                    discountOrigin.count = (quantity * price) / 2
                }

                if (discountOrigin.name === 'bulk' && quantity >= 3) {
                    discountOrigin.count = quantity
                }
            }
        })
    } else if (type === 'decrease') {
        discounts.forEach((discountOrigin) => {
            if (discount === discountOrigin.name) {
                if (discountOrigin.name === '2-for-1') {
                    discountOrigin.count = quantity % 2 === 0 ? (quantity * price) / 2 : ((quantity - 1) * price) / 2
                }

                if (discountOrigin.name === 'bulk') {
                    discountOrigin.count = quantity < 3 ? 0 : quantity
                }
            }
        })
    }
}
function reducer(state, action) {
    switch (action.type) {
        case 'showModal':
            /* eslint-disable */
            const {
                product: { image, imageLarge, name, code, price, stringCode, description, discount, quantity },
            } = action
            /* eslint-enable */

            return {
                showModal: true,
                image,
                imageLarge,
                name,
                code,
                price,
                stringCode,
                description,
                discount,
                quantity,
            }
        case 'hideModal':
            CheckoutInstance.addItem()
            CheckoutInstance.scan(state.stringCode)
            CheckoutInstance.setPrice('increase', state.price)
            if (action.discount) {
                calcDiscount('increase', action, state, 'modal')
            }
            CheckoutInstance.emit('update-checkout', { instance: CheckoutInstance.data })
            return { showModal: false, quantity: action.quantity }
        case 'checkout':
            CheckoutInstance.total()
            CheckoutInstance.emit('update-checkout', { instance: CheckoutInstance.data })
            return {}
        case 'changeQuantity':
            if (action.action === 'increment') {
                CheckoutInstance.addItem()
                CheckoutInstance.scan(action.stringCode)
                CheckoutInstance.setPrice('increase', action.price)
                if (action.discount) {
                    calcDiscount('increase', action, state, 'button')
                }
            }
            if (action.action === 'decrement') {
                CheckoutInstance.unScan(action.stringCode)
                CheckoutInstance.removeItem()
                CheckoutInstance.setPrice('decrease', action.price)
                if (action.discount) {
                    calcDiscount('decrease', action, state)
                }
            }
            CheckoutInstance.emit('update-checkout', { instance: CheckoutInstance.data })
            return {}
        default:
            throw new Error()
    }
}
const ShoppingCartProvider = (props) => {
    const { children } = props
    const [store, dispatch] = useReducer(reducer, initialState)
    const [state, setState] = useState()

    return (
        <ShoppingCartContext.Provider value={[state, setState, store, dispatch]}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }
