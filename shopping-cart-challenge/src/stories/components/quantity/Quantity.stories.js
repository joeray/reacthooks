import React from 'react'
import { storiesOf } from '@storybook/react'
import Quantity from './Quantity'

const args = {
    Quantity: {
        amount: 3,
        stringCode: 'fake code',
    },
}

storiesOf('Quantity', module).add('default view', () => <Quantity {...args.Quantity} />)
