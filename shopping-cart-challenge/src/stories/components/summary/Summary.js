import React, { useContext } from 'react'
import CheckoutInstance from '../../../Checkout'
import { ShoppingCartContext } from '../../../ShoppingCartContext'
import Button from '../button/Button'
import './Summary.css'

export default function Summary() {
    const [, , , dispatch] = useContext(ShoppingCartContext)

    const checkout = () => {
        dispatch({ type: 'checkout' })
    }

    return (
        <aside className="summary">
            <h1 className="main">Order Summary</h1>
            <ul className="summary-items wrapper border">
                <li>
                    <span className="summary-items-number">{CheckoutInstance.data.products.length} Items</span>
                    <span data-testid="items-price" className="summary-items-price">
                        {CheckoutInstance.data.price} <span className="currency">€</span>
                    </span>
                </li>
            </ul>
            <div className="summary-discounts wrapper-half border">
                <h2>Discounts</h2>
                <ul className="summary-discounts-ul">
                    {CheckoutInstance.data.discounts.map((discount, index) => (
                        <li
                            data-testid={`discount${index}`}
                            key={`${discount}${Math.random().toString(36).substr(2, 9)}`}
                        >
                            <span>{discount.title}</span>
                            <span>
                                {discount.count > 0 && '-'}
                                {discount.count} €
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="summary-total wrapper">
                <ul>
                    <li>
                        <span className="summary-total-cost">Total cost</span>
                        <span data-testid="summary-total-price" className="summary-total-price">
                            {CheckoutInstance.data.totalPrice}
                            &nbsp; €
                        </span>
                    </li>
                </ul>
                <Button legend="Checkout" action={checkout} />
            </div>
        </aside>
    )
}
