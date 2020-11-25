import React from 'react'
import { storiesOf } from '@storybook/react'
import ModalProduct from './modal-product'
import shirt from '../../assets/shirt.png'
import { ShoppingCartContext } from '../../../ShoppingCartContext'

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
    showModal: true,
}

storiesOf('Modal Product', module)
    .addDecorator((getStory) => {
        return <ShoppingCartContext.Provider value={['', '', store]}>{getStory()}</ShoppingCartContext.Provider>
    })
    .add('default view', () => <ModalProduct />)
