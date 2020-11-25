import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../../ShoppingCartContext'

import './Details.css'

export default function Details({ product }) {
    const [, setState, , dispatch] = useContext(ShoppingCartContext)
    const { image, name, code } = product
    const showModal = () => {
        setState((state) => ({ ...state, showModal: true }))
        dispatch({
            type: 'showModal',
            product,
        })
    }

    return (
        <button
            type="button"
            className="product-link"
            role="link"
            onClick={showModal}
            onKeyDown={showModal}
            tabIndex={0}
        >
            <figure className="product-image">
                <img src={image} alt="Shirt" />
                <div className="product-description">
                    <h1>{name}</h1>
                    <p className="product-code">Product code {code}</p>
                </div>
            </figure>
        </button>
    )
}
