import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import Quantity from './Quantity'

describe('Quantity component', () => {
    let container

    beforeEach(() => {
        const args = {
            changeQuantity: () => {},
            stringCode: 'fake code',
            amount: 2,
        }
        container = render(<Quantity {...args} />)
    })

    it('renders elements of component', () => {
        const increment = getByTestId(container.container, 'adder')
        const decrement = getByTestId(container.container, 'substracter')
        const quantity = getByTestId(container.container, 'quantity')

        expect(increment).toBeTruthy()
        expect(decrement).toBeTruthy()
        expect(quantity).toBeTruthy()
    })

    it('change state of quantity counter', () => {
        const quantity = getByTestId(container.container, 'quantity')
        const increment = getByTestId(container.container, 'adder')
        const decrement = getByTestId(container.container, 'substracter')
        expect(quantity.value).toBe('2')
        fireEvent.click(increment)
        expect(quantity.value).toBe('3')
        fireEvent.click(decrement)
        expect(quantity.value).toBe('2')
    })
})
