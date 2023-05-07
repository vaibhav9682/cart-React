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

    render() {

        const { products } = this.state;
        // console.log(products);

        return (
            <div className='cart'>
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}

                    />

                })}

            </div>
        )
    }


}



export default Cart;