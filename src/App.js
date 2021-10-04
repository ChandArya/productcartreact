import './App.css';
import React from 'react'
import Product from'./product'
import Cart from './cart'
const data={
  "products": [
      {
          "_id": "dress1",
          "title": "Dress 1",
          "image": "images/dress1.jpeg",
          "description": "About this dress",
          "prince": 300,
          "availableSizes": ["S", "M", "L", "XL"]
      },
      {
          "_id": "dress2",
          "title": "Dress 2",
          "image": "images/dress2.jpeg",
          "description": "About this dress",
          "prince": 250,
          "availableSizes": ["S", "M", "L", "XL"]
      },
      {
          "_id": "dress3",
          "title": "Dress 3",
          "image": "images/dress3.jpeg",
          "description": "About this dress",
          "prince": 350,
          "availableSizes": ["S", "M", "L", "XL"]
      },
      {
          "_id": "dress4",
          "title": "Dress 4",
          "image": "images/dress4.jpeg",
          "description": "About this dress",
          "prince": 600,
          "availableSizes": ["S", "M", "L", "XL"]
      }
  ]
}
class App extends React.Component {
  constructor(props)
  {
      super(props);
      this.state={
          cart:[],
  }
}
  onAddCart=(id)=>
  {
   var  product=data['products'].filter((prodcut)=>{
      return prodcut._id==id
    })
    var list=this.state.cart
    list.push(product)
    this.setState({
      cart:list
    })
    console.log("on add cart",list)
  }
  onDeleteCart=(id)=>
  {
    console.log("on add cart",id)
    var  product=this.state.cart.filter((prodcut)=>{
      return prodcut[0]._id==id
    })
    var list=this.state.cart
    list.pop(product)
    this.setState({
      cart:list
    })
  }
  render() {   
  return ( <div >
    
    <h1>Product cart</h1>
  <div style={{position:'relative',top:20,left:20}}>
  <h1>Product page</h1>
  {
     data['products'].map((product) =>
     <Product onAddCart={this.onAddCart}key={product._id} data={product}></Product>
     )

  } 
  </div>
  <div style={{position:'relative',top:20,left:500}}>
  <h1>cart page</h1>
  {
     this.state.cart.map((product) =>
     <Cart onDeleteCart={this.onDeleteCart}key={product._id} data={product}></Cart>
     )

  } 
  </div>
 </div>) 
  }
}
export default App;

