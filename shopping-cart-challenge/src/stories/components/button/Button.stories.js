import React from 'react'
import { storiesOf } from '@storybook/react'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'
import Button from './Button'

storiesOf('Button', module)
    .addDecorator((getStory) => (
        <ShoppingCartProvider
            value={{
                dispatch: () => {},
            }}
        >
            {getStory()}
        </ShoppingCartProvider>
    ))
    .add('default view', () => <Button legend="click me" />)
