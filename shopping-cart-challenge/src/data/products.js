import shirt from '../stories/assets/shirt.png'
import mug from '../stories/assets/mug.png'
import cap from '../stories/assets/cap.png'

import shirtLarge from '../stories/assets/tshirt.jpg'
import mugLarge from '../stories/assets/mug.jpg'
import capLarge from '../stories/assets/cap.jpg'

const products = [
    {
        name: 'shirt',
        stringCode: 'TSHIRT',
        code: 'X7R2OPX',
        price: 20,
        image: shirt,
        imageLarge: shirtLarge,
        discount: 'bulk',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.',
    },
    {
        name: 'mug',
        stringCode: 'MUG',
        code: 'X2G2OPZ',
        price: 5,
        image: mug,
        imageLarge: mugLarge,
        discount: '2-for-1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.',
    },
    {
        name: 'cap',
        stringCode: 'CAP',
        code: 'X3W2OPY',
        price: 10,
        image: cap,
        imageLarge: capLarge,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales semper elit sit amet interdum. Praesent volutpat sed elit vel consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis bibendum id.',
    },
]

export default products
