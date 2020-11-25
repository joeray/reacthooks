import React from 'react'
import { render, within, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductRow from './Product-row'
import shirt from '../../assets/shirt.png'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'

describe('Product Row component', () => {
    let container

    beforeEach(() => {
        const args = {
            product: {
                image: shirt,
                imageLarge: shirt,
                name: 'fake name',
                code: 'fake code',
                stringCode: 'fake code',
                price: 20,
                amount: 2,
                quant: 2,
                discount: 8,
                description: 'Lorem ipsum',
            },
        }
        container = render(
            <ShoppingCartProvider value={{ dispatch: jest.fn() }}>
                <ProductRow {...args} />
            </ShoppingCartProvider>
        )
    })

    it('show elements with proper text', () => {
        const details = getByTestId(container.container, 'details')
        const amount = getByTestId(container.container, 'quantity')
        const quantity = getByTestId(container.container, 'quantity-in-row')
        const total = getByTestId(container.container, 'product-total')

        const { getByText } = within(quantity)
        const { getByText: getTotalText } = within(total)
        const { getByText: getDetailsText } = within(details)

        expect(getByText('20')).toBeInTheDocument()

        expect(getTotalText('40')).toBeInTheDocument()

        expect(getDetailsText('fake name')).toBeInTheDocument()

        expect(amount.value).toEqual('2')

        expect(details).toBeTruthy()
        expect(amount).toBeTruthy()
        expect(quantity).toBeTruthy()
        expect(total).toBeTruthy()
    })
})
