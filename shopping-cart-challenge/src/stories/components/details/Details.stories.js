import React from 'react'
import { storiesOf } from '@storybook/react'
import Details from './Details'
import shirt from '../../assets/shirt.png'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'

const args = {
    Details: {
        product: {
            image: shirt,
            name: 'fake name',
            code: 'fake code',
        },
    },
}
storiesOf('Details', module)
    .addDecorator((getStory) => (
        <ShoppingCartProvider
            value={{
                dispatch: () => {},
            }}
        >
            {getStory()}
        </ShoppingCartProvider>
    ))
    .add('default view', () => <Details {...args.Details} />)
