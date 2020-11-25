import data from './data/checkout'

class Checkout {
    constructor() {
        this.data = data
        this.events = {}
    }

    scan(code) {
        this.data.products.push(code)
    }

    unScan(code) {
        const delIndex = this.data.products.findIndex((element) => element === code)
        this.data.products = this.data.products.filter((elem, index) => index !== delIndex)
    }

    addItem() {
        this.data.items += 1
    }

    removeItem() {
        this.data.items -= 1
    }

    setPrice(mode, price) {
        if (mode === 'increase') this.data.price += price
        if (mode === 'decrease') this.data.price -= price
    }

    total() {
        const afterMath = this.data.price - this.data.discounts.reduce((acc, current) => acc + current.count, 0)
        this.data.totalPrice = afterMath
    }

    emit(eventName, dat) {
        const event = this.events[eventName]
        if (event) {
            event.forEach((fn) => {
                fn.call(null, dat)
            })
        }
    }

    subscribe(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }

        this.events[eventName].push(fn)
        return () => {
            this.events[eventName] = this.events[eventName].filter((eventFn) => fn !== eventFn)
        }
    }
}

const CheckoutInstance = new Checkout()

export default CheckoutInstance
