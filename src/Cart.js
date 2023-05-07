import React from 'react';
import CartItem from './cartItem';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 3,
                    img: '',
                    id: 2
                },
                {
                    price: 945,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log('heyyy', product)
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products /* using shorthand property */
        })
    }
    handleDecreaseQuantity = (product) => {
        console.log('heyyy', product)
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty !== 0) {
            products[index].qty -= 1;
            this.setState({
                products /* using shorthand property */
            })
        }

    }

    render() {

        const { products } = this.state;
        // console.log(products);

        return (
            <div className='cart'>
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}

                    />

                })}

            </div>
        )
    }


}



export default Cart;