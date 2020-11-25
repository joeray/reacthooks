import React from 'react'
import { storiesOf } from '@storybook/react'
import Summary from './Summary'
import { ShoppingCartProvider } from '../../../ShoppingCartContext'

storiesOf('Summary', module)
    .addDecorator((getStory) => (
        <ShoppingCartProvider
            value={{
                dispatch: () => {},
            }}
        >
            {getStory()}
        </ShoppingCartProvider>
    ))
    .add('default view', () => <Summary />)
