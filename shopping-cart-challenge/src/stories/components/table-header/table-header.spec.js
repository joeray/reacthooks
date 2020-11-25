import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TableHeader from './table-header'

describe('Table Header component', () => {
    let container

    beforeEach(() => {
        container = render(<TableHeader />)
    })

    it('show elements with proper text', () => {
        const listRow = getByTestId(container.container, 'products-list-row')
        const productColumn = listRow.childNodes[0].classList
        const quantityColumn = listRow.childNodes[1].classList
        const priceColumn = listRow.childNodes[2].classList
        const totalColumn = listRow.childNodes[3].classList

        expect(productColumn.contains('col-product')).toBeTruthy()
        expect(quantityColumn.contains('col-quantity')).toBeTruthy()
        expect(priceColumn.contains('col-price')).toBeTruthy()
        expect(totalColumn.contains('col-total')).toBeTruthy()
    })
})
