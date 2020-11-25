import React, { useContext } from 'react'
import './styles/main.css'
import products from './data/products'
import Summary from './stories/components/summary/Summary'
import ProductRow from './stories/components/product-row/Product-row'
import TableHeader from './stories/components/table-header/table-header'
import ModalProduct from './stories/components/modal-product/modal-product'

import { ShoppingCartProvider, ShoppingCartContext } from './ShoppingCartContext'

function App() {
    const [, , , dispatch] = useContext(ShoppingCartContext)

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#7350FF" />
                <link rel="manifest" href="/manifest.json" />
                <link href="css/main.css" rel="stylesheet" />
                <title>Cabify Checkout Challenge</title>
            </head>
            <body>
                <ShoppingCartProvider value={{ dispatch }}>
                    <div id="root">
                        <main className="App">
                            <section className="products">
                                <h1 className="main">Shopping cart</h1>
                                <TableHeader />
                                <ul className="products-list">
                                    {products.map((product) => (
                                        <ProductRow
                                            product={product}
                                            key={`${Math.random().toString(36).substr(2, 9)}`}
                                        />
                                    ))}
                                </ul>
                            </section>
                            <Summary />
                        </main>
                    </div>
                    <ModalProduct />
                </ShoppingCartProvider>
            </body>
        </html>
    )
}

export default App
