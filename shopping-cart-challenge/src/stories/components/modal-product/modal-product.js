import React, { useContext } from 'react'
import styled from 'styled-components'
import { ShoppingCartContext } from '../../../ShoppingCartContext'
import Button from '../button/Button'
import './modal-product.css'
import CheckoutInstance from '../../../Checkout'

export default function ModalProduct() {
    const [, , store, dispatch] = useContext(ShoppingCartContext)

    const ModalGroup = styled.figure`
        user-select: none;
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        height: 100%;
        background-image: url(${store.imageLarge});
        background-repeat: no-repeat;
        background-size: contain;
    `
    const closeModal = () => {
        const modal = document.querySelector('.modal')
        modal.classList.toggle('show-modal')
        dispatch({ type: 'hideModal' })
    }

    const addToCart = () => {
        dispatch({ type: 'hideModal', discount: store.discount, quantity: CheckoutInstance.data.products.length + 1 })
    }

    return (
        <div className={`modal ${store.showModal ? 'show-modal' : ''}`}>
            <div className="modal-content">
                <button type="button" className="close-button" onClick={closeModal}>
                    &times;
                </button>
                <ModalGroup>
                    <div className="modal-product-description">
                        <div>
                            <div data-testid="modal-price" className="top">
                                <h1>{store.name}</h1> <span className="price">{store.price} €</span>
                            </div>
                            <div data-testid="modal-description" className="description">
                                {store.description}
                            </div>
                            <p className="modal-product-code">Product code {store.code}</p>
                            <Button type="button" legend="Add to cart" action={addToCart} />
                        </div>
                    </div>
                </ModalGroup>
            </div>
        </div>
    )
}
