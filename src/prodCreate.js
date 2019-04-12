import React, { Component } from 'react';
import axios from 'axios';


export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeProdName = this.onChangeProdName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productPrice: ''
        }
    }
    onChangeProdName(e) {
        this.setState({
            productName: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            productPrice: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            productName: this.state.productName,
            productPrice: this.state.productPrice
        }

        //adding to the database
        axios.post('http://localhost:5000/serverport/add', serverport)

            .then(function (response) {
                console.log(response.data);
                alert(response.data);
                
            });
        this.setState({
            productName: '',
            productPrice: ''
        });
        this.props.history.push('/Get')
    }

    render() {
        return (
            <div style={{ marginTop: 50 }} className="container">
                <h3>Add New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Product Name:  </label>
                        <input type="text" className="form-control" value={this.state.productName} onChange={this.onChangeProdName} />
                    </div>
                    <div className="form-group">
                        <label>Add Product Price: </label>
                        <input type="number" className="form-control" value={this.state.productPrice} onChange={this.onChangePrice} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}