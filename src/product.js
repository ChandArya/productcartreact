import React from 'react'

import { Button,Card } from 'react-bootstrap';
class Product extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            product:props.data

        }
      
    }
    clickOnCart=(id)=>
    {
        console.log("click",id)
        this.props.onAddCart(id)
    }
    render() {
    return ( <div>
        <Card style={{ width: '18rem',border:1 }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>{this.state.product['title']}</Card.Title>
    <Card.Text>
    {this.state.product['description']}
    </Card.Text>
    <Card.Text>
    {this.state.product['prince']}
    </Card.Text>
    <Button variant="primary" onClick={(id)=>this.clickOnCart(this.state.product['_id'])}>Add to cart</Button>
  </Card.Body>
</Card>
        </div>)
       
    
    }
  }
 export default Product;