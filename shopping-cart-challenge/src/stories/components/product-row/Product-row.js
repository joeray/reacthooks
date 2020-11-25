import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Details from '../details/Details'
import Quantity from '../quantity/Quantity'
import CheckoutInstance from '../../../Checkout'
import { ShoppingCartContext } from '../../../ShoppingCartContext'
import './Product-row.css'

export default function ProductRow({ product }) {
    const { stringCode, price, discount, quant: account = 0 } = product
    const [quantity, setQuantity] = useState(0)
    const [, , , dispatch] = useContext(ShoppingCartContext)

    CheckoutInstance.subscribe('update-checkout', (data) => {
        // count number of strings of product name into products array of checkout
        setQuantity(data.instance.products.filter((strCode) => strCode === stringCode).length)
    })

    useEffect(() => {
        setQuantity(account)
    }, [account])

    const updateQuantity = (action, quant) => {
        dispatch({ type: 'changeQuantity', action, quant, stringCode, price, discount, quantity: quantity - 1 })
    }

    return (
        <li className="product row" key={`${Math.random().toString(36).substr(2, 9)}`}>
            <div data-testid="details" className="col-product">
                <Details product={product} />
            </div>
            <div data-testid="amount" className="col-quantity">
                <Quantity
                    stringCode={stringCode}
                    amount={quantity}
                    changeQuantity={(action, quant = 0) => {
                        updateQuantity(action, quant)
                    }}
                />
            </div>
            <div className="col-price">
                <span data-testid="quantity-in-row" className="product-price">
                    {price}
                </span>
                <span className="product-currency currency"> €</span>
            </div>
            <div className="col-total">
                <span data-testid="product-total" className="product-price">
                    {price * quantity}
                </span>
                <span className="product-currency currency"> €</span>
            </div>
        </li>
    )
}

ProductRow.propTypes = {
    quant: PropTypes.number,
}

ProductRow.defaultProps = {
    quant: 0,
}
