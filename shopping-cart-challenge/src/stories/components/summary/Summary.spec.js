import React from 'react'
import { render, within, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Summary from './Summary'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'
import CheckoutInstance from '../../../Checkout'

describe('Summary component', () => {
    let container

    beforeEach(() => {
        CheckoutInstance.price = 43
        CheckoutInstance.items = 4
        CheckoutInstance.discounts = [{ title: 'bulk', count: 6 }]
        CheckoutInstance.totalPrice = 60

        container = render(
            <ShoppingCartProvider
                value={{
                    store: CheckoutInstance,
                    dispatch: jest.fn(),
                }}
            >
                <Summary />
            </ShoppingCartProvider>
        )
    })

    it('show elements with proper text', () => {
        const itemsPrice = getByTestId(container.container, 'items-price')
        const summaryTotalPrice = getByTestId(container.container, 'summary-total-price')
        const discount = getByTestId(container.container, 'discount0')

        const { getByText: getItemsText } = within(itemsPrice)
        const { getByText: getSummaryTotalPriceText } = within(summaryTotalPrice)
        const { getByText: getDiscountText } = within(discount)

        expect(getItemsText('0')).toBeInTheDocument()

        expect(getSummaryTotalPriceText('0 €')).toBeInTheDocument()

        expect(getDiscountText('2x1 Mug offer')).toBeInTheDocument()
        expect(getDiscountText('0 €')).toBeInTheDocument()

        expect(itemsPrice).toBeTruthy()
        expect(summaryTotalPrice).toBeTruthy()
        expect(discount).toBeTruthy()
    })
})
