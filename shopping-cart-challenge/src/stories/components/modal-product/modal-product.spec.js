import React from 'react'
import { render, within, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import shirt from '../../assets/shirt.png'
import ModalProduct from './modal-product'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'

describe('Modal Product component', () => {
    let container

    beforeEach(() => {
        const store = {
            className: 'show-modal',
            image: shirt,
            name: 'fake name',
            code: 'fake code',
            price: 23,
            description: 'Lorem ipsum',
            stringCode: 'fake code',
            discount: 'bulk',
            quantity: 9,
        }

        const dispatch = jest.fn()

        container = render(
            <ShoppingCartProvider value={['', '', store, dispatch]}>
                <ModalProduct />
            </ShoppingCartProvider>
        )
    })

    it('show elements with proper text', () => {
        const modalPrice = getByTestId(container.container, 'modal-price')
        const modalDescription = getByTestId(container.container, 'modal-description')
        const modalButton = getByTestId(container.container, 'action-button')

        const { getByText: getModalPriceText } = within(modalPrice)
        const { getByText: getModalButtonText } = within(modalButton)

        expect(getModalPriceText('€')).toBeInTheDocument()
        expect(getModalButtonText('Add to cart')).toBeInTheDocument()

        expect(modalPrice).toBeTruthy()
        expect(modalDescription).toBeTruthy()
        expect(modalButton).toBeTruthy()
    })
})
