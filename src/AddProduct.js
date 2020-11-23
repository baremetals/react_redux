import React, { Component } from 'react';
import { Button } from 'reactstrap';

class AddProduct extends Component {

    state  = {
        productName: '',
        productPrice: 0
    }

    productNameChangeHandler = (event) => {
        this.setState({productName: event.target.value});
    }

    productPriceChangeHandler = (event) => {
       this.setState({productPrice: event.target.value}); 
    }

    render() {
        return(
            <div className="container">
                <input type="text" placeholder="Product Name" onChange={this.productNameChangeHandler} value={this.state.productName} />
                <input type="number" placeholder="Product Price" onChange={this.productPriceChangeHandler} value={this.state.productPrice} />
                <Button className="buttons" onClick={() =>{
                    this.props.addProduct(this.state.productName, this.state.productPrice);
                }}>Add Product</Button>
            </div>
        )
    }
}

export default AddProduct;