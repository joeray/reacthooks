import React from 'react'
import { storiesOf } from '@storybook/react'
import ProductRow from './Product-row'
import shirt from '../../assets/shirt.png'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'

const args = {
    ProductRow: {
        product: {
            image: shirt,
            name: 'fake name',
            code: 'fake code',
            price: 23,
            description: 'Lorem ipsum',
            stringCode: 'fake code',
            discount: 'bulk',
            quantity: 9,
        },
    },
}
storiesOf('Product Row', module)
    .addDecorator((getStory) => (
        <ShoppingCartProvider
            value={{
                dispatch: () => {},
            }}
        >
            {getStory()}
        </ShoppingCartProvider>
    ))
    .add('default view', () => <ProductRow {...args.ProductRow} />)
