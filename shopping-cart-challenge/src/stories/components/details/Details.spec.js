import React from 'react'
import { mount } from 'enzyme'
import Details from './Details'
import shirt from '../../assets/shirt.png'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'

describe('Details component', () => {
    let details
    const props = {
        product: {
            image: shirt,
            name: 'fake name',
            code: 'fake code',
        },
    }

    beforeEach(() => {
        details = mount(
            <ShoppingCartProvider value={{}}>
                <Details {...props} />
            </ShoppingCartProvider>
        )
    })

    it('renders image of product', () => {
        const image = details.find('img')
        expect(image.length).toEqual(1)
        expect(image.props().src).toEqual('shirt.png')
    })

    it('renders title of product', () => {
        const title = details.find('h1')
        expect(title.length).toEqual(1)
        expect(title.text()).toContain(props.product.name)
    })

    it('renders description of product', () => {
        const description = details.find('.product-code')
        expect(description.length).toEqual(1)
        expect(description.text()).toContain(props.product.code)
    })
})
