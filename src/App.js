import React from 'react';
// import CartItem from './cartItem'
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 3,
          img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          id: 2
        },
        {
          price: 945,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id) /*return array without this given id*/
    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty
    })


    return count;
  }

  getCartTotal = () => {
    const { products } = this.state
    let total = 0;

    products.map((product) => {
      total = total + product.qty * product.price;
    })

    return total;
  }

  render() {
    const { products } = this.state
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}

        />
        <div style={{ fontSize: 20, padding: 10 }}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
