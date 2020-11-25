import React, { useState, useEffect } from 'react'
import './Quantity.css'

export default function Quantity({ changeQuantity = () => {}, amount }) {
    const [account, setAccount] = useState(0)
    const decrement = () => {
        if (account >= 1) {
            setAccount(account - 1)
            changeQuantity('decrement', account - 1)
        }
    }
    const increment = () => {
        setAccount(account + 1)
        changeQuantity('increment', account + 1)
    }
    useEffect(() => {
        setAccount(amount)
    }, [amount])

    return (
        <div className="quantity-wrapper">
            <button
                type="button"
                data-testid="substracter"
                id="substracter"
                className="count substract"
                onClick={() => decrement()}
            >
                -
            </button>
            <input
                data-testid="quantity"
                id="quantity"
                type="text"
                className="product-quantity"
                value={account}
                onChange={() => {}}
            />
            <button type="button" data-testid="adder" id="adder" className="count add" onClick={() => increment()}>
                +
            </button>
        </div>
    )
}
