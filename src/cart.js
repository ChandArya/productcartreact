import React from 'react'

import { Button,Card } from 'react-bootstrap';
class Cart extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            product:props.data

        }
      console.log("props.data",props.data)
    }
    onDeleteCart=(id)=>
    {
        console.log("click",id)
        this.props.onDeleteCart(id)
    }
    render() {
    return ( <div>
        <Card style={{ width: '18rem',border:1 }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>{this.state.product[0]['title']}</Card.Title>
    <Card.Text>
    {this.state.product[0]['description']}
    </Card.Text>
    <Card.Text>
    {this.state.product[0]['prince']}
    </Card.Text>
    <Button variant="primary" onClick={(id)=>this.onDeleteCart(this.state.product[0]['_id'])}>Delete from cart</Button>
  </Card.Body>
</Card>
        </div>)
       
    
    }
  }
 export default Cart;