import React, { Component } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { getFirestore, collection, getDocs, onSnapshot, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from './index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'product');
        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
          const products = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            data['id'] = doc.id;
            products.push(data);
          });
          this.setState({
            products,
            loading: false
          });
        });

        return () => {
          unsubscribe();
        };
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }

  handleIncreaseQuantity = async (product) => {
    // console.log(product.id)
    // const { products } = this.state;
    // const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products
    // });
    try {
      // const { products } = this.state;
      // const index = products.indexOf(product);

      const docRef = doc(db, 'product', product.id);
      await updateDoc(docRef, { qty: product.qty + 1 });

      // setQuantity(quantity + 1);
    } catch (error) {
      console.error('Error updating quantity: ', error);
    }

  }



  handleDecreaseQuantity = async (product) => {
    // const { products } = this.state;
    // const index = products.indexOf(product);
    // if (products[index].qty !== 0) {
    //   products[index].qty -= 1;
    //   this.setState({
    //     products
    //   });
    // }

    //  decrease qty from db
    try {
      // const { products } = this.state;
      // const index = products.indexOf(product);

      const docRef = doc(db, 'product', product.id);
      await updateDoc(docRef, { qty: product.qty - 1 });

      // setQuantity(quantity + 1);
    } catch (error) {
      console.error('Error updating quantity: ', error);
    }


  };

  handleDeleteProduct = async (id) => {
    // console.log(id)
    // const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: items
    // });

    // delete doc from db
    await deleteDoc(doc(db, 'product', id))

  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price;
    });
    return total;
  };

  addProduct = () => {
    try {
      const productData = {
        title: 'washing machine',
        price: 75,
        qty: 5,
        img: ""
      }

      const collectionRef = collection(db, 'product');

      addDoc(collectionRef, productData)
        .then((docRef) => {
          console.log('product added', productData)
          console.log('product ref', docRef)

        })

    } catch (error) {
      console.log(error)
    }


  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct}>Add a Product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading products...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;