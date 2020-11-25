import React from 'react'
import { render, fireEvent, getByTestId, within } from '@testing-library/react'
import Button from './Button'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'

describe('Button component', () => {
    let button
    const checkout = jest.fn()
    beforeEach(() => {
        const args = {
            legend: 'fake text',
            action: checkout,
        }
        button = render(
            <ShoppingCartProvider
                value={{
                    dispatch: jest.fn(),
                }}
            >
                <Button {...args} />
            </ShoppingCartProvider>
        )
    })

    it('renders the legend inside', () => {
        const { getByText } = within(button.container)
        expect(getByText('fake text')).toBeInTheDocument()
    })

    it('applies proper function', () => {
        const selector = getByTestId(button.container, 'action-button')
        fireEvent.click(selector)
        expect(selector).toBeTruthy()
        expect(checkout.mock.calls.length).toBe(1)
    })
})
